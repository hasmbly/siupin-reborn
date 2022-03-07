import config from "config";
import { Sequelize } from "sequelize-typescript";
import { Berita } from "../../models/berita.model";
import { User } from "../../models/user.model";
import _logger from "../logger/appLogger";

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
  models: [Berita, User],
});

sequelize.databaseVersion().then((databaseVersion) => {
  _logger.info("databaseVersion: " + databaseVersion);
});
