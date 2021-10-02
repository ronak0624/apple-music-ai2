require('dotenv').config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

const routes = require("./routes/search.js");

app.use(express.static(path.join(__dirname, "views", "build")));

app.use("/api", routes);


app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "build", "index.html"));
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));