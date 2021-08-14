import config from "config";
import { Sequelize } from "sequelize-typescript";

const database: string = config.get("dbconfig.db");
const username: string = config.get("dbconfig.username");
const password: string = config.get("dbconfig.password");
const port: number = config.get("dbconfig.port");

export const sequelize = new Sequelize(database, username, password, {
  port: port,
  database: database,
  dialect: "mysql",
  username: username,
  password: password,
  models: [__dirname + "/models/**/*.model.ts"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});
