"use client";

import { useState } from "react";
import { Candidate } from "@/types/candidate";

interface Props {
  onAdd: (candidate: Candidate) => void;
}

export default function CandidateForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !role) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      name,
      email,
      role,
    });

    setName("");
    setEmail("");
    setRole("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Candidate</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
