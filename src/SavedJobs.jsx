import React from 'react'
const SavedJobs = ({ savedJobs }) => {
  return (
    <div>
      <h2 className="text-info">Saved Jobs</h2>
      <div className="row mt-5 g-5">
           {savedJobs.map((job) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={job.id}>
          <div className="border border-1 border-info mt-5 g-5 ps-5 pb-3">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
        </div>
         </div>
      ))}
   
    </div>
    </div>
  );
};

export default SavedJobs;