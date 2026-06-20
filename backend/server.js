const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiry");

const app = express();

app.use(cors());

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API route
app.use("/api/enquiry", enquiryRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
