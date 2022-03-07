import { Column, Table } from "sequelize-typescript";
import { Entity, IEntity } from "./entity.model";

interface IBerita extends IEntity {
  BeritaID: string;
  Title: string;
  Description: string;
  id_berita: string;
}

@Table({
  modelName: "Berita",
  tableName: "beritas",
})
export class Berita extends Entity<IBerita> implements IBerita {
  @Column({ primaryKey: true })
  public BeritaID!: string;

  @Column
  public Title!: string;
  @Column
  public Description!: string;
  @Column
  public id_berita!: string;

  public constructor(init?: Partial<Berita>) {
    super();
    Object.assign(this, init);
  }
}