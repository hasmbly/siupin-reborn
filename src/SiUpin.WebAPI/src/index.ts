import express, { Application, Request, Response, NextFunction } from "express";
import MiddlewareLogger from "./infrastructure/logger/middlewareLogger";
import cors from "cors";
import config from "config";
import Logger from "./infrastructure/logger/appLogger";

const path = __dirname + "/views/";
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
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");

  res.send("Hello world");
});

const PORT = process.env.PORT || config.get("webApi.port");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
