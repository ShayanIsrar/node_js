import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/create", form);
      setForm({ name: "", email: "", age: "" });
      // alert("This is the power of money");
      navigate("/users");
    } catch (err) {
      alert("Error creating user.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-red-800 italic text-center font-bold mb-4">
        Create New User
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-200 p-6 rounded shadow-md max-w-md"
      >
        <input
          className="w-full border p-2 rounded"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
