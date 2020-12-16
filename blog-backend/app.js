const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env"});
const taskRouter = require("./routes/blogRoutes");
const app = express();

app.use(express.json());
app.use("/blogdata",taskRouter);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`));