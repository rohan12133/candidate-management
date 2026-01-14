import { Candidate } from "@/types/candidate";
import CandidateRow from "./CandidateRow";

interface Props {
  candidates: Candidate[];
  onDelete: (id: string) => void;
}

export default function CandidateList({ candidates, onDelete }: Props) {
  if (candidates.length === 0) {
    return <p className="text-gray-600">No candidates added yet.</p>;
  }

  return (
    <table className="w-full border bg-white rounded shadow">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c) => (
          <CandidateRow
            key={c.id}
            candidate={c}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
