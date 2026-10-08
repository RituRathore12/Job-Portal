const express =  require("express");
const cors = require("cors");
const  mongoose = require("mongoose");
const Application = require("./models/Application");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
try {
  console.log("MongoDB Connected");
} catch (error) {
  console.log(error);
}

app.get("/",(req,res)=>{
    res.send("job portal is running on backend");
})
app.get("/api/jobs", (req, res) => {
  const jobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Tech Solutions",
      location: "Mumbai",
      salary: "₹5 - ₹8 LPA",
      type: "Full-Time"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebWorks",
      location: "Pune",
      salary: "₹4 - ₹7 LPA",
      type: "Full-Time"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnovateTech",
      location: "Bangalore",
      salary: "₹6 - ₹10 LPA",
      type: "Full-Time"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebWorks",
      location: "Pune",
      salary: "₹4 - ₹7 LPA",
      type: "Full-Time"
    },
    {
      id: 5,
      title: "Backend Developer",
      company: "TaskUs",
      location: "Indore",
      salary: "₹4 - ₹7 LPA",
      type: "Full-Time"
    },
    {
      id: 6,
      title: "MERN Developer",
      company: "InfoBeans",
      location: "Pune",
      salary: "₹4 - ₹7 LPA",
      type: "Full-Time"
    }
  ];

  res.json(jobs);
});
app.post("/api/apply", async (req,res)=>{
  try{

    const application = new Application(req.body);

    await application.save();
    res.json({
        message: "Submitted Successfully",
        application: application
    })
}catch (error){
  console.log(error);
}
})
app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
})