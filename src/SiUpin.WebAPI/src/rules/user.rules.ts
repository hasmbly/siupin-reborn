import { check } from "express-validator";
import _appUtility from "../common/appUtility";
import _logger from "../infrastructure/logger/appLogger";
import { User } from "../models/user.model";

export const userRules = {
  forRegister: [
    check("email")
      .isEmail()
      .withMessage("Invalid email format")
      .custom((email) =>
        User.findOne({ where: { Email: email } }).then((user) => !!!user)
      )
      .withMessage("Email exists"),
    check("password").isLength({ min: 8 }).withMessage("Invalid password"),
    check("confirmPassword")
      .custom((confirmPassword) => (request: { body: User }) => {
        request.body.PasswordHash === confirmPassword;
      })
      .withMessage("Passwords are different"),
  ],
  forLogin: [
    check("Username")
      .notEmpty()
      .withMessage("Username tidak boleh kosong")
      .custom(async (username, { req: _request }) => {
        await User.findOne({ where: { Username: username } }).then((user) => {
          if (!user) {
            throw new Error("Maaf Username atau Email tidak di temukan");
          }
        });
      }),
    check("Password")
      .notEmpty()
      .withMessage("Password tidak boleh kosong")
      .custom(async (password, { req: request }) => {
        await User.findOne({
          where: { Username: (request.body as User).Username },
        }).then(async (user) => {
          if (user) {
            const isMatched: boolean = _appUtility.VerifyPasswordHash(
              password,
              user.PasswordSalt,
              user.PasswordHash
            );

            if (!isMatched) {
              throw new Error("Maaf Password yang anda masukan kurang tepat");
            }
          }
        });
      }),
  ],
};
