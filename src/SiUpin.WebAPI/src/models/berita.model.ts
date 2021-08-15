import {
  Model,
  PrimaryKey,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface IBerita {
  BeritaID: string;
  Title: string;
  Description: string;
  CreatedBy: string;
  Created: Date;
  LastModified: Date;
  id_berita: string;
}

@Table({
  modelName: "Berita",
  tableName: "beritas",
})
export class Berita extends Model<IBerita> implements IBerita {
  @PrimaryKey
  @Column
  public BeritaID!: string;

  @Column
  public Title!: string;

  @Column
  public Description!: string;

  @CreatedAt
  public Created!: Date;

  @UpdatedAt
  public LastModified!: Date;

  @Column
  public CreatedBy!: string;

  @Column
  public id_berita!: string;

  public constructor(init?: Partial<Berita>) {
    super();
    Object.assign(this, init);
  }
}

export async function getAllBerita(): Promise<Berita[]> {
  const beritas = await Berita.findAll();

  return beritas;
}
