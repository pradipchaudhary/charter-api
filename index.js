import express from "express";
import bodyParser from "body-parser";
import usersRouters from "./routes/users.js";

// Application
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// User Router
app.use("/users", usersRouters);

app.get("/", (req, res, next) => {
  res.send("welcome to the server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
