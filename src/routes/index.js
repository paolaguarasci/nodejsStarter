import express from "express";
let router = express.Router();

router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/home", function(req, res) {
  res.render("home", { title: "twig home page" });
});

router.get("/testing", function(req, res) {
  res.render("testing", { title: "Test con DataTable" });
});

export default router;
