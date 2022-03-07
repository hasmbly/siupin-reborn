import { Router } from "express";
import { matchedData, validationResult } from "express-validator";
import _logger from "../infrastructure/logger/appLogger";
import { User } from "../models/user.model";
import { userRules } from "../rules/user.rules";
import { UserService } from "../services/user.service";

export const userRouter = Router();
const userService = new UserService();

userRouter.get("/", async (_request, response) => {
  response.json(await userService.getAllUser());
});

userRouter.post(
  "/login",
  userRules["forLogin"],
  async (request: any, response: any) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) return response.status(422).json(errors.array());

    const payload = matchedData(request) as User;
    const jwtToken = await userService.login(payload);

    _logger.info(`userRouter - jwtToken: ${await userService.login(payload)}`);

    response.json({ access_token: jwtToken });
  }
);
