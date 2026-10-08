const mongoose = require("mongoose");
const ApplicationSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Phone : String,
    Resume: String
})
const Application = mongoose.model("Application", ApplicationSchema);
module.exports = Application;