const express = require("express");
const router = express.Router();
const {
  createAssignment,
  getAssignments,
  getAssignment,
  updateAssignment,
  deleteAssignment,
  submitAssignment,
  getSubmissions  
} = require("../controllers/assignmentController");
// temporary test route

router.post("/", createAssignment);
router.get("/", getAssignments);
router.get("/:id", getAssignment);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);
router.get("/:id/submissions", getSubmissions);
router.post("/:id/submit", submitAssignment);

module.exports = router; 
