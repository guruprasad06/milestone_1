const express = require("express");
const mongoose = require("mongoose");
const assignmentRoutes = require("./routes/assignmentRoutes");

require("dotenv").config();


const app = express();
app.use(express.json());

app.use("/api/assignments", assignmentRoutes);


// test route 
app.get("/", (req, res) => {
    res.send("API running");
});

// connect MongoDB (local)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));