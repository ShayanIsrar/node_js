import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path ? "bg-blue-600 text-white" : "text-gray-700";

  return (
    <div className="w-52 bg-gray-300 shadow-md h-screen sticky top-0">
      <h2 className="text-2xl text-green-800 italic font-bold text-center py-6 border-b">
        Dashboard
      </h2>
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          to="/form"
          className={`px-4 py-2 rounded hover:bg-blue-100 ${isActive("/form")}`}
        >
          ➕ Create User
        </Link>
        <Link
          to="/users"
          className={`px-4 py-2 rounded hover:bg-blue-100 ${isActive(
            "/users"
          )}`}
        >
          📋 User Details
        </Link>
      </nav>
    </div>
  );
}
