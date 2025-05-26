// src/App.jsx
import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
