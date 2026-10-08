import React, { useState } from 'react'
import Navbar from '../Pages/Navbar'
import Job from '../Job'
import Popjob from './Popjob' 
import SavedJobs from './Savedjobs'
const Home = ({savedJobs,setSavedJobs}) => {
  return (
    <div>
      <Navbar/>
      <section className='hero'>
       <div className="container">
        <div className="row mx-auto my-5 ">
          <div className="hero-text col-lg-6 col-md-6 col-sm-12 mt-5">
           <h1>Find Your<br/>
           <span className='text-info'>Dream Job</span></h1>
             <p>Discover thousands of job opportunities and build your career.
              </p>
              

          </div>
          <div className="col-md-6">
            <div className="hero-img">
            </div>
          </div>
          <section className="search-section m-4">
  <div className="container">
    <div className="search-box row g-3 mt-5">
     <div className="col-lg-4 col-md-4 col-sm-12">
      <input
        type="text"
        placeholder="Job title or keyword"
        className="form-control"
      />  
      </div>
      
      <div className="col-lg-4 col-md-4 col-sm-12">
      <input
        type="text"
        placeholder="Location"
        className="form-control"
      />
      </div>

    <div className="col-lg-4 col-md-4 col-sm-12">
      <button className="btn btn-primary">
        Search Jobs
      </button>
      </div>
    </div>
  </div>
</section>
        </div>
       </div>
      </section>
      <Popjob/>
           <Job
  savedJobs={savedJobs}
  setSavedJobs={setSavedJobs}
/>
    </div>
  )
}

export default Home
