import React from "react";

import { Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}
