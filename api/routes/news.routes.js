import express from "express";
import { getAllNews, postNews } from "../controllers/news.controllers.js";

const newsRouter = express.Router();

newsRouter.get("/", getAllNews).post("/", postNews);

export default newsRouter;