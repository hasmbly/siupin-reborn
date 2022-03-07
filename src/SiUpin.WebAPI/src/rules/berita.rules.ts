import { check } from "express-validator";
import _appUtility from "../common/appUtility";
import _logger from "../infrastructure/logger/appLogger";
import { Berita } from "../models/berita.model";

export const beritaRules = {
  forCreate: [
    check("Title")
      .notEmpty()
      .withMessage("Title atau Judul berita tidak boleh kosong")
      .custom(async (title, { req: _request }) => {
        if (title != undefined || title != null) {
          await Berita.findOne({ where: { Title: title } }).then((entity) => {
            if (entity) {
              throw new Error("Maaf Title sudah di gunakan");
            }
          });
        }
      }),
  ],
  forEdit: [
    check("BeritaID")
      .notEmpty()
      .withMessage("BeritaID tidak boleh kosong")
      .custom(async (beritaID, { req: _request }) => {
        await Berita.findOne({ where: { BeritaID: beritaID } }).then(
          (entity) => {
            if (!entity) {
              throw new Error("Maaf BeritaID tidak di temukan di Database");
            }
          }
        );
      }),
    check("title")
      .notEmpty()
      .withMessage("Title atau Judul berita tidak boleh kosong")
      .custom((title) =>
        Berita.findOne({ where: { Title: title } }).then((berita) => !!!berita)
      )
      .withMessage("Title atau Judul berita sudah di gunakan"),
  ],
};
