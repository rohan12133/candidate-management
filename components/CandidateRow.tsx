import { Candidate } from "@/types/candidate";

interface Props {
  candidate: Candidate;
  onDelete: (id: string) => void;
}

export default function CandidateRow({ candidate, onDelete }: Props) {
  return (
    <tr>
      <td className="border p-2">{candidate.name}</td>
      <td className="border p-2">{candidate.email}</td>
      <td className="border p-2">{candidate.role}</td>
      <td className="border p-2">
        <button
          onClick={() => onDelete(candidate.id)}
          className="text-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
