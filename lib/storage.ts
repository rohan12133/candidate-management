import { Candidate } from "@/types/candidate";

const STORAGE_KEY = "candidates";

export const getCandidates = (): Candidate[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCandidates = (candidates: Candidate[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates));
};
