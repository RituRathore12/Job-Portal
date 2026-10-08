
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Apply = () => {
    const navigate =  useNavigate();
    const [message, setMessage] = useState("");
  return (
    <div className='Apply'>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <button className='btn btn-danger mt-2 mx-5'
            onClick={()=> navigate (-1)}
            > x</button>
     <h1 className='text text-center text-info'>Application Form</h1> 
     <form className='mt-5 mx-auto w-50'>
        <input
        type="text"
        placeholder="Enter your Name"
        className="form-control mb-3 "
      />

      <input
        type="Email"
        placeholder="Enter your mail"
        className="form-control mb-3"
      />

      <input
        type="tel"
        placeholder=" Phone No."
        className="form-control mb-3"
      />

             <input
          type="file"
          placeholder=" Upload Resume"
          />

      <button className ="btn btn-info" onClick={()=>{
        setMessage("Submitted Successfully")
      }}> Submit</button>
      {message && (
  <p className="text-success mt-3">
    {message}
  </p>
      )}


     </form>
     </div>
    </div>
  )
}

export default Apply
