import { useState, useEffect } from "react";
import { apiCall } from "../services/authServieces";

export default function BranchManagement() {
  const [branches, setBranches] = useState([]);
  const [branchName, setBranchName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingBranchNo, setEditingBranchNo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [originalBranch, setOriginalBranch] = useState(null);

  const fetchBranches = async () => {
    try {
      const response = await apiCall({
        endpoint: "api/auth/branchdata",
        method: "GET",
      });
      if (response.success) setBranches(response.data || []);
    } catch (err) {
      console.error("Error fetching branches:", err);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    handleCancel();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const alphabetOnly = /^[A-Za-z ]+$/;
    if (!alphabetOnly.test(branchName)) {
      alert("Branch Name must contain only alphabets (A-Z)");
      return;
    }

  
    if (branchName.length > 25) {
      alert("Branch Name must be 25 characters or less");
      return;
    }

    const payload = {
      branch_name: branchName,
      created_at_date: createdDate,
      created_at_time: createdTime,
    };

    if (isEditMode && originalBranch) {
      const noChanges =
        originalBranch.branch_name === payload.branch_name &&
        originalBranch.created_at_date === payload.created_at_date &&
        originalBranch.created_at_time === payload.created_at_time;

      if (noChanges) {
        alert("No changes detected");
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      let response;
      if (isEditMode && editingBranchNo) {
        response = await apiCall({
          endpoint: `api/auth/branch/${editingBranchNo}`,
          method: "PUT",
          payload,
        });
      } else {
        response = await apiCall({
          endpoint: "api/auth/createbranch",
          method: "POST",
          payload,
        });
      }

      if (response.success) {
        alert(isEditMode ? "Branch Updated!" : "Branch Added!");
        closeModal();
        fetchBranches();
      } else {
        throw new Error(response.message || "Failed to save branch");
      }
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleDelete = async (branch_no) => {
    if (!window.confirm(`Delete branch ${branch_no}?`)) return;

    try {
      const response = await apiCall({
        endpoint: `api/auth/branch/${branch_no}`,
        method: "DELETE",
      });

      if (response.success) {
        alert("Branch Deleted!");
        fetchBranches();
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (branch) => {
    setBranchName(branch.branch_name);
    setCreatedDate(branch.created_at_date.split("T")[0]);
    setCreatedTime(branch.created_at_time);

    setOriginalBranch({
      branch_name: branch.branch_name,
      created_at_date: branch.created_at_date.split("T")[0],
      created_at_time: branch.created_at_time,
    });

    setIsEditMode(true);
    setEditingBranchNo(branch.branch_no);

    openModal();
  };

  const handleCancel = () => {
    setBranchName("");
    setCreatedDate("");
    setCreatedTime("");
    setIsEditMode(false);
    setEditingBranchNo(null);
    setOriginalBranch(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-rb from-gray-100 to-gray-200 p-8">

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700 drop-shadow">
          Branch Management System
        </h1>
      </header>

      <div className="text-right mb-4">
        <button
          onClick={() => { setIsEditMode(false); openModal(); }}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          + Add Branch
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-4">
        <table className="min-w-full">
          <thead className="bg-indigo-600 text-white rounded">
            <tr>
              <th className="px-6 py-3 text-left">Branch No.</th>
              <th className="px-6 py-3 text-left">Branch Name</th>
              <th className="px-6 py-3 text-left">Created Date</th>
              <th className="px-6 py-3 text-left">Created Time</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {branches.map((branch) => (
              <tr key={branch.branch_no} className="border-b hover:bg-indigo-50 transition">
                <td className="px-6 py-4">{branch.branch_no}</td>
                <td className="px-6 py-4">{branch.branch_name}</td>
                <td className="px-6 py-4">{branch.created_at_date.split("T")[0]}</td>
                <td className="px-6 py-4">{branch.created_at_time}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(branch)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    📝Edit
                  </button>
                  <button
                    onClick={() => handleDelete(branch.branch_no)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    ❌Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white shadow-2xl border border-gray-200
                          w-full max-w-lg p-6 rounded-2xl animate-slideUp">

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              {isEditMode ? "Edit Branch" : "Add Branch"}
            </h2>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-gray-700 font-medium">Branch Name</label>
              <input
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="w-full border border-gray-300 bg-white text-gray-800 p-2 rounded-lg 
                           focus:ring-2 focus:ring-indigo-300"
                required
              />

              <label className="block mb-2 text-gray-700 font-medium mt-4">Created Date</label>
              <input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                className="w-full border border-gray-300 bg-white text-gray-800 p-2 rounded-lg 
                           focus:ring-2 focus:ring-indigo-300"
                required
              />

              <label className="block mb-2 text-gray-700 font-medium mt-4">Created Time</label>
              <input
                type="time"
                value={createdTime}
                onChange={(e) => setCreatedTime(e.target.value)}
                className="w-full border border-gray-300 bg-white text-gray-800 p-2 rounded-lg 
                           focus:ring-2 focus:ring-indigo-300"
                required
              />

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
                  disabled={loading}
                >
                  {loading ? "Saving..." : isEditMode ? "Update" : "Submit"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}
