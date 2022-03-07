import _logger from "../infrastructure/logger/appLogger";
import { Berita } from "../models/berita.model";

export class BeritaService {
  private static _berita: any;
  static get berita() {
    return BeritaService._berita;
  }

  async getAllBerita(): Promise<Berita[]> {
    const beritas = await Berita.findAll({
      where: {},
    });

    return beritas;
  }

  async createBerita(berita: Berita): Promise<Berita> {
    _logger.debug(`berita.Title: ${berita.Title}`);

    return await Berita.create();
  }
}
