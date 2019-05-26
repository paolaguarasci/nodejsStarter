"use strict";

require("dotenv").config();

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
const app = express();

app.set("view engine", "twig");
app.set("views", "./src/views");
app.use(logger("dev"));
app.use(express.json()); // bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter);

export default app;
