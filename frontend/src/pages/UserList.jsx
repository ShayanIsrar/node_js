import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", age: "" });

  // Fetch users
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/users/get");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete a user
  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      fetchUsers(); // Refresh list
    } catch (err) {
      alert("Failed to delete user.");
    }
  };

  // Start editing
  const startEditing = (user) => {
    setEditingUser(user._id);
    setEditForm({ name: user.name, email: user.email, age: user.age });
  };

  // Submit update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/users/${editingUser}`,
        editForm
      );
      setEditingUser(null);
      fetchUsers(); // Refresh
    } catch (err) {
      alert("Update failed.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="bg-white p-4 rounded shadow-md overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td className="border px-4 py-2">{u.name}</td>
                <td className="border px-4 py-2">{u.email}</td>
                <td className="border px-4 py-2">{u.age}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => startEditing(u)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => deleteUser(u._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update form (modal-style) */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow-md w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Update User</h2>
            <input
              className="w-full border p-2 mb-3 rounded"
              name="name"
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
              placeholder="Name"
              required
            />
            <input
              className="w-full border p-2 mb-3 rounded"
              name="email"
              value={editForm.email}
              onChange={(e) =>
                setEditForm({ ...editForm, email: e.target.value })
              }
              placeholder="Email"
              required
            />
            <input
              className="w-full border p-2 mb-3 rounded"
              name="age"
              value={editForm.age}
              onChange={(e) =>
                setEditForm({ ...editForm, age: e.target.value })
              }
              placeholder="Age"
              required
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
