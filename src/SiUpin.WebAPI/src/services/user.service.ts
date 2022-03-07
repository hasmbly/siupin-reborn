import * as jwt from "jsonwebtoken";
import _logger from "../infrastructure/logger/appLogger";
import { User } from "../models/user.model";

export class UserService {
  private readonly _jwtSecret = "0.rfyj3n9nzh";

  static get userAttributes() {
    return ["id", "email"];
  }

  private static _user: any;
  static get user() {
    return UserService._user;
  }

  async getAllUser(): Promise<User[]> {
    const datas = await User.findAll();

    return datas;
  }

  async login({ Username }: User) {
    let token: string = "";

    await User.findOne({ where: { Username: Username } }).then((user) => {
      if (user) {
        const { UserID: userID, Username: username } = user!;

        const jwtToken = {
          token: jwt.sign({ userID, username }, this._jwtSecret),
        };

        token = jwtToken.token;
      }
    });

    return token;
  }

  verifyToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this._jwtSecret, (err, decoded) => {
        if (err) {
          resolve(false);
          return;
        }

        if (decoded != null) {
          UserService._user = User.findOne({
            where: { UserID: decoded["id"] },
          });
          resolve(true);

          return;
        }
      });
    }) as Promise<boolean>;
  }
}
