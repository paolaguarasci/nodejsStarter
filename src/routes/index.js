// routes/index.js
import express from "express";
let router = express.Router();
/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/home", function(req, res) {
  res.render("home", { title: "twig home page" });
});

export default router;
