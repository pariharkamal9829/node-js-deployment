const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World! This is my Node.js REST API.");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
