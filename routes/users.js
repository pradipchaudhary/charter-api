import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to User Router ");
});

export default router;
// export default router;
