import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
const Popjob = () => {
  return (
    <div>
      <h4 className='mt-5 mb-5 ms-5'>Popular Categories</h4>

      <div className="popular mt-5 mb-5 ms-5">
        <div className="row mb-5">

          <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaCode className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Development</p>
                <p>1254 jobs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaPencil className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Design</p>
                <p>854 jobs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaSuitcase className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Marketing</p>
                <p>654 jobs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaHandHoldingDollar className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Finance</p>
                <p>458 jobs</p>
              </div>
            </div>
          </div> 

           <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaCode className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Frontend</p>
                <p>458 jobs</p>
              </div>
            </div>
          </div>


 <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
            <div className="c border border-info ps-3">
              <div className="c-icon">
                <FaCode className="code-icon bg-info ms-3 mt-3" />
                <p className='mt-3'>Backend</p>
                <p>458 jobs</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Popjob