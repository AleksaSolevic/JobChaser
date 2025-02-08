import { SearchBarProps } from "./types/Types";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <header>
      <input
        type="text"
        placeholder="Search for a job..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </header>
  );
}
