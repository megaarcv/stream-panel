const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const dashboardRoute = require("./routes/dashboard");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", dashboardRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log(" Stream Panel Started");
    console.log(" Running on Port :", PORT);
    console.log("=================================");
});
