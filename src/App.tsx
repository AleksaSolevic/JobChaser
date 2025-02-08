import { useState } from "react";
import "./App.css";
import JobList from "./components/Joblist";
import SearchBar from "./components/Searchbar";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <JobList searchTerm={searchTerm} />
    </>
  );
}

export default App;
