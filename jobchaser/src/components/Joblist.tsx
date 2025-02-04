import jobs from "../data/dummydata";

function JobList() {
  return (
    <>
      <div className="joblistdiv">
        {jobs.map((job) => (
          <div key={job.id}>
            <h2>Company: {job.company}</h2>
            <img src={job.logo} alt={job.company} style={{height: "25px", width: "25px"}} />
            <p>Position: {job.position}</p>
            <p>Location: {job.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default JobList;
