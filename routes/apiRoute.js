const express = require("express");
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");
const apiRouter = express.Router();

apiRouter.get("/", studentController.handleGreeting);

apiRouter.get("/students", studentController.handleGetStudents);

apiRouter.get("/courses", courseController.handleGetCourses);
apiRouter.get("/courses/:id", courseController.handleGetCourseById);
apiRouter.post("/courses", courseController.handleAddCourse);

module.exports = apiRouter;