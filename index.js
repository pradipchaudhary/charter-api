import express from "express";
import bodyParser from "body-parser";

// Application
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
