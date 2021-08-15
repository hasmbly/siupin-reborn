import config from "config";
import { Sequelize } from "sequelize-typescript";
import { Berita } from "../../models/berita.model";
import appLogger from "../logger/appLogger";

const database: string = config.get("databaseConfig.database");
const username: string = config.get("databaseConfig.username");
const password: string = config.get("databaseConfig.password");
const port: number = config.get("databaseConfig.port");

export const sequelize = new Sequelize(database, username, password, {
  port: port,
  database: database,
  dialect: "mysql",
  username: username,
  password: password,
  models: [Berita],
});

sequelize.databaseVersion().then((databaseVersion) => {
  appLogger.info("databaseVersion: " + databaseVersion);
});
