const express = require("express");
const path = require("path");

const app = express();

const PORT = 3001;

// Serve Static Files
app.use(express.static(__dirname));

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});