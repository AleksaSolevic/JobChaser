import jobs from "../data/dummydata";
import { JobListProps } from "./types/Types";

interface JobListComponentProps {
  searchTerm: string;
}

function JobList({ searchTerm }: JobListComponentProps): JSX.Element {
  const filteredJobs = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="joblistdiv">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job: JobListProps) => (
          <div key={job.id} className="jobdiv">
            <h2>Company: {job.company}</h2>
            <img
              src={job.logo}
              alt={job.company}
              style={{ height: "25px", width: "25px" }}
            />
            <p>Position: {job.position}</p>
            <p>Location: {job.location}</p>
          </div>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
}

export default JobList;
