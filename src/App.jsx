import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Job from "./Job";
import Apply from "./Pages/Apply";
import Popjob from "./components/Popjob";
import SavedJobs from "./SavedJobs";
const App = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home savedJobs={savedJobs} setSavedJobs={setSavedJobs} />}
        ></Route>
        <Route
          path="/job"
          element={<Job savedJobs={savedJobs} setSavedJobs={setSavedJobs} />}
        ></Route>
        <Route path="/apply" element={<Apply />}></Route>
        <Route path="/Popjob" element={<Popjob />}></Route>
        <Route
          path="/SavedJobs"
          element={<SavedJobs savedJobs={savedJobs} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
