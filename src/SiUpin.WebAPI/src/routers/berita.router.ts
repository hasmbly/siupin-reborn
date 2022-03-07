import { Router } from "express";
import { matchedData, validationResult } from "express-validator";
import _logger from "../infrastructure/logger/appLogger";
import { Berita } from "../models/berita.model";
import { beritaRules } from "../rules/berita.rules";
import { BeritaService } from "../services/berita.service";

export const beritaRouter = Router();
const beritaService = new BeritaService();

beritaRouter.get("/", async (_request, response) => {
  response.json(await beritaService.getAllBerita());
});

beritaRouter.post(
  "/",
  beritaRules["forCreate"],
  async (request: any, response: any) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) return response.status(422).json(errors.array());

    const payload = matchedData(request) as Berita;
    const berita = await beritaService.createBerita(payload);

    response.status(200).json({ IsSucceeded: true, ID: berita.BeritaID });
  }
);
