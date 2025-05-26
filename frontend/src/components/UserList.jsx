// src/components/UserList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/users/get");
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserForm
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        fetchUsers={fetchUsers}
      />
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditingUser(user)}
                className="bg-yellow-400 px-3 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
