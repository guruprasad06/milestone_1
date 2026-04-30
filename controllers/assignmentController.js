
const Assignment = require("../models/Assignment");


// Create Assignment
exports.createAssignment = async (req, res) => {
    try {
        const { title, subject, description, dueDate } = req.body;

        // basic validation
        if (!title || !subject || !dueDate) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const assignment = new Assignment({
            title,
            subject,
            description,
            dueDate
        });

        await assignment.save();

        res.status(201).json(assignment);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
// Get all assignments
exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get single assignment
exports.getAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({ msg: "Assignment not found" });
        }

        res.json(assignment);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Update assignment
exports.updateAssignment = async (req, res) => {
    try {
        const updated = await Assignment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ msg: "Assignment not found" });
        }

        res.json(updated);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Delete assignment
exports.deleteAssignment = async (req, res) => {
    try {
        const deleted = await Assignment.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ msg: "Assignment not found" });
        }

        res.json({ msg: "Assignment deleted" });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const Submission = require("../models/Submission");

// Submit assignment
exports.submitAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({ msg: "Assignment not found" });
        }

        // ⏰ Deadline check
        if (new Date() > assignment.dueDate) {
            assignment.status = "closed";
            await assignment.save();
            return res.status(400).json({ msg: "Deadline passed" });
        }

        if (assignment.status !== "active") {
            return res.status(400).json({ msg: "Assignment is closed" });
        }

        const { studentName, content } = req.body;

        if (!studentName || !content) {
            return res.status(400).json({ msg: "Missing fields" });
        }

        const submission = new Submission({
            assignmentId: req.params.id,
            studentName,
            content
        });

        await submission.save();

        res.status(201).json(submission);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get submissions for an assignment
exports.getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find({
            assignmentId: req.params.id
        });

        res.json(submissions);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};