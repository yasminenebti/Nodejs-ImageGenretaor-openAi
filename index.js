const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const api = require("./routes/openaiRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server working on PORT :${PORT}`));
