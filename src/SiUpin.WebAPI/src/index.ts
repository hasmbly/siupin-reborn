import "./infrastructure/database/dbcontext";
import express, { Application, Request, Response, NextFunction } from "express";
import MiddlewareLogger from "./infrastructure/logger/middlewareLogger";
import cors from "cors";
import config from "config";
import AppLogger from "./infrastructure/logger/appLogger";
import { getAllBerita } from "./models/berita.model";

const path = "./public/";
const app: Application = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(express.static(path));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(MiddlewareLogger);

app.get(
  "/",
  (_request: Request, response: Response, nextFunction: NextFunction) => {
    response.sendFile(path + "index.html");
  }
);

app.get("/logger", (_, res) => {
  AppLogger.error("This is an error log");
  AppLogger.warn("This is a warn log");
  AppLogger.info("This is a info log");
  AppLogger.http("This is a http log");
  AppLogger.debug("This is a debug log");

  res.send("Hello Logger");
});

app.get("/berita", async (_, response) => {
  const beritas = await getAllBerita();

  response.json(beritas);
});

const PORT = process.env.PORT || config.get("webApi.port");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
