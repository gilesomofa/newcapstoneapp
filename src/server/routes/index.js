const express = require("express");
const studentController = require("../controllers/studentController");
const studentController = require("../controllers/behaviorController");
const studentController = require("../controllers/teacherController");

const router = express.Router();
//the following routes are being written with hopes of expanding features of app in future

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.get("/:id", studentController.getStudentByBehavior);
router.get("/:id", studentController.getStudentByClassroomId);
router.get("/:id", studentController.getStudentByDateTime);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

router.get("/", behaviorController.getAllStudents);
router.get("/:id", behaviorController.getStudentById);
router.get("/:id", behaviorController.getStudentByBehavior);
router.get("/:id", behaviorController.getStudentByClassroomId);
router.get("/:id", behaviorController.getStudentByDateTime);
router.post("/", behaviorController.createStudent);
router.put("/:id", behaviorController.updateStudent);
router.delete("/:id", behaviorController.deleteStudent);

router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.get("/:id", teacherController.getTeacherByBehavior);
router.get("/:id", teacherController.getTeacherByClassroomId);
router.post("/", teacherController.createTeacher);
router.put("/:id", teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

module.exports = router;
