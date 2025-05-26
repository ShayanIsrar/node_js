// src/components/UserForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ editingUser, setEditingUser, fetchUsers }) => {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await axios.put(
        `http://localhost:3000/api/users/${editingUser._id}`,
        form
      );
      setEditingUser(null);
    } else {
      await axios.post("http://localhost:3000/api/users/create", form);
    }
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <div className="mb-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          type="number"
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
