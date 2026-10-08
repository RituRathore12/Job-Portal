import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"

const Job = ({savedJobs, setSavedJobs }) => {
  const [jobs , setjobs] = useState([]);
  useEffect(()=>{
    const getJobs = async () =>{
      try {
        const res = await fetch("http://localhost:5000/api/jobs")
        const data =  await res.json();
        setjobs(data);
      } catch (error) {
        console.log(error)
      }
    }
    getJobs();
  },[])
  
  const handleSave = (i) => {
    const alreadySaved = savedJobs.some(
      (savedJob) => savedJob.id === i.id
    );

    if (!alreadySaved) {
      setSavedJobs([...savedJobs, i]);
    }
  };
return (
  
    <div className='job container-fluid'>
      <h1 className='text-info text-center mt-5'>Latest Jobs</h1>
      <div className="row m-5">
        {jobs.map((i)=>(
          <div className="col-lg-4 col-md-4 col-sm-12" key={i.id}>
             <div className="Apply border border-1 border-info mt-5 g-5 ps-5 pb-3">
          <h4 className=' text-card mt-4'>{i.title}</h4>
            <p>{i.company}</p>
          <p>{i.location}</p>
          <p>{i.salary}</p>
          <p>{i.type}</p>         
           <button onClick={() => handleSave(i)}>
            Save
          </button>

          <NavLink to ="/apply" > Apply Now</NavLink>
          
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Job
