import React, { useState } from "react";
import { Home, Calendar, User, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  let empId = localStorage.getItem("user-cred");
  empId = JSON.parse(empId);

  let userRole = empId?.user?.emp_role;

  // base path role ke hisab se set karo
  const basePath = userRole === "admin" ? "/admin" : "";

  // ab nav items me path ko dynamic bana do
  const navItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      path: `${basePath}/dashboard`,
    },
    {
      id: "attendance",
      icon: Calendar,
      label: "Attendance",
      path: "/attendance",
    },
    // { id: "reports", icon: BarChart3, label: "Reports", path: "/reports" },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },
  ];

  const handleNavigation = (id, path) => {
    setActiveTab(id);
    navigate(path);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-49">
      <nav className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.path)}
              className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 rounded-lg transition-all duration-200 active:scale-95 ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              <div
                className={`relative ${
                  isActive ? "transform -translate-y-0.5" : ""
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
                )}
              </div>
              <span
                className={`text-xs mt-1 font-medium ${
                  isActive ? "text-orange-600" : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Safe area for devices with notches/home indicators */}
      <div className="h-safe-bottom bg-white"></div>
    </footer>
  );
}
