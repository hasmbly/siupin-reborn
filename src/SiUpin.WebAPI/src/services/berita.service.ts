import _logger from "../infrastructure/logger/appLogger";
import { Berita } from "../models/berita.model";

export class BeritaService {
  private static _berita: any;
  static get berita() {
    return BeritaService._berita;
  }

  async getAllBerita(): Promise<any> {
    const datas = await Berita.findAll({
      where: {},
    });

    let beritas: any = [];

    datas.forEach(data => {
      let berita =
      {
        'FileName': data.Title
      };

      beritas.push(berita);
    });

    return beritas;
  }

  async createBerita(berita: Berita): Promise<Berita> {
    _logger.debug(`berita.Title: ${berita.Title}`);

    return await Berita.create();
  }
}
