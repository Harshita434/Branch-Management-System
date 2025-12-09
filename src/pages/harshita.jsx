import { useState, useEffect } from "react";
import { apiCall } from "../services/authServieces";
import { useNavigate, useParams } from "react-router-dom";

export default function Harshita() {
  const navigate = useNavigate();
  const { branch_no } = useParams(); 

  const [branchName, setBranchName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isEditMode = !!branch_no; 

  
  useEffect(() => {
    if (isEditMode) {
      const fetchBranch = async () => {
        setLoading(true);
        try {
          const response = await apiCall({
            endpoint: `api/auth/branch/${branch_no}`,
            method: "GET",
          });

          if (response.success) {
            const branch = response.data;
            setBranchName(branch.branch_name);
            setCreatedDate(branch.created_at_date);
            setCreatedTime(branch.created_at_time);
          } else {
            throw new Error(response.message || "Failed to fetch branch data");
          }
        } catch (err) {
          setError(err.message || "Unexpected error occurred");
        }
        setLoading(false);
      };

      fetchBranch();
    }
  }, [branch_no, isEditMode]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      branch_name: branchName,
      created_at_date: createdDate,
      created_at_time: createdTime,
    };

    setLoading(true);
    setError(null);

    try {
      let response;
      if (isEditMode) {
        
        response = await apiCall({
          endpoint: `api/auth/branch/${branch_no}`,
          method: "PUT",
          payload,
        });
      } else {
        
        payload.branch_no = Math.floor(Math.random() * 10000); 
        response = await apiCall({
          endpoint: "api/auth/createbranch",
          method: "POST",
          payload,
        });
      }

      if (response.success) {
        alert(isEditMode ? "Branch Updated Successfully!" : "Branch Added Successfully!");
        navigate("/branch");
      } else {
        throw new Error(response.message || "Failed to save branch");
      }
    } catch (err) {
      setError(err.message || "Unexpected error occurred");
    }

    setLoading(false);
  };

  // ---------------- CANCEL HANDLER ---------------- //
  const handleCancel = () => {
    navigate("/branch");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-xl font-bold mb-4 text-center">
        {isEditMode ? "Edit Branch" : "Add New Branch"}
      </h1>

      {error && <p className="text-red-600 text-center mb-3">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Branch Name */}
        <label className="block mb-2 font-medium">Branch Name</label>
        <input
          type="text"
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />

        {/* Created Date */}
        <label className="block mb-2 font-medium">Created Date</label>
        <input
          type="date"
          value={createdDate}
          onChange={(e) => setCreatedDate(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />

        {/* Created Time */}
        <label className="block mb-2 font-medium">Created Time</label>
        <input
          type="time"
          value={createdTime}
          onChange={(e) => setCreatedTime(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : isEditMode ? "Update" : "Submit"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
