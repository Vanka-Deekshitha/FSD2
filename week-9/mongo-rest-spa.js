const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Configuration
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const dbURI = "mongodb://25b05a4511_db_user:fsd123@ac-1c2qz5i-shard-00-00.bu39eog.mongodb.net:27017,ac-1c2qz5i-shard-00-01.bu39eog.mongodb.net:27017,ac-1c2qz5i-shard-00-02.bu39eog.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxn7pl-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas successfully!"))
  .catch(err => console.error("Database connection error:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  course: String,
  isActive: { type: Boolean, default: true }
});

const Student = mongoose.model("Student", studentSchema);

// Home Route
app.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("apphome", { students });
});

// CREATE
app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({
      message: "Error saving student",
      error: err.message
    });
  }
});

// READ
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedStudent)
      return res.status(404).json({ message: "Student not found" });

    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({
      message: "Error updating student",
      error: err.message
    });
  }
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent)
      return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student record deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting student",
      error: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});