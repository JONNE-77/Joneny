 const courseModel = require("../models/courseModel");

const handleGetCourses = (req, res) => {
  const courses = courseModel.getAllCourses();
  res.json(courses);
};

const handleGetCourseById = (req, res) => {
  const courseId = req.params.id;
  const course = courseModel.getCourseById(courseId);
};

const handleAddCourse = (req, res) => {
  try {
    const newCourse = courseModel.addCourse(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  handleGetCourses,
  handleGetCourseById,
  handleAddCourse,
};