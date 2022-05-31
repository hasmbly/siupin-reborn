import "./infrastructure/database/dbcontext";
import express, { Application, Request, Response, NextFunction } from "express";
import MiddlewareLogger from "./infrastructure/logger/middlewareLogger";
import cors from "cors";
import config from "config";
import _logger from "./infrastructure/logger/appLogger";
import { userRouter } from "./routers/user.router";
import { tokenGuard } from "./middlewares/token-guard";
import { beritaRouter } from "./routers/berita.router";
import { showMessage } from "../../siupin.shared/dist/src/berita";

const path = __dirname + "/public/";
const app: Application = express();
const PORT = process.env.PORT || config.get("webApi.port");

const corsOptions = {
    origin: "http://localhost:4200",
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

app.get("/logger", (_, response) => {
    _logger.error("This is an error log");
    _logger.warn("This is a warn log");
    _logger.info("This is a info log");
    _logger.http("This is a http log");
    _logger.debug("This is a debug log");

    response.send("Hello Logger");
});

// Unauthorized Endpoint
app.use("/api/users", userRouter);
app.use("/api/berita", beritaRouter);

app.use(tokenGuard());

// Authorized Endpoint
app.use("*", (_, response) => {
    response.sendFile(path);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

showMessage();