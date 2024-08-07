import express from "express";

var router = express.Router();

router.get("/", function (req, res, next) {
  // res.render("index", { title: "To Do" });
  res.status(200).send("to do api");
});

export default router;
