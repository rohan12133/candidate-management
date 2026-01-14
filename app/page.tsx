"use client";

import { useEffect, useState } from "react";
import CandidateForm from "@/components/CandidateForm";
import CandidateList from "@/components/CandidateList";
import { Candidate } from "@/types/candidate";
import { getCandidates, saveCandidates } from "@/lib/storage";

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setCandidates(getCandidates());
  }, []);

  useEffect(() => {
    saveCandidates(candidates);
  }, [candidates]);

  const addCandidate = (candidate: Candidate) => {
    setCandidates((prev) => [...prev, candidate]);
  };

  const deleteCandidate = (id: string) => {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Candidate Management
      </h1>

      <CandidateForm onAdd={addCandidate} />
      <CandidateList candidates={candidates} onDelete={deleteCandidate} />
    </>
  );
}
