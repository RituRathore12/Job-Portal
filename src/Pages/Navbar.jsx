import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-info fw-5" to="#">Job Portal</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto me-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active me-5" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active me-5" aria-current="page" to="/Job">Jobs</NavLink>
          </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-5" aria-current="page" to="/SavedJobs">Saved Jobs</NavLink>
          </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Dasboard</NavLink>
          </li>
        </ul>
              <form className="d-flex me-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
