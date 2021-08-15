import {
  Model,
  PrimaryKey,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface IBerita {
  Title: string;
  BeritaID: string;
  CreatedBy: string;
  Created: Date;
  LastModified: Date;
  id_berita: string;
  Description: Text;
}

@Table({
  modelName: "Berita",
  tableName: "beritas",
})
export class Berita extends Model<IBerita> implements IBerita {
  @PrimaryKey
  @Column
  public BeritaID!: string;

  public Title!: string;
  public Description!: Text;

  @CreatedAt
  public Created!: Date;

  @UpdatedAt
  public LastModified!: Date;

  public CreatedBy!: string;

  public id_berita!: string;

  public constructor(init?: Partial<Berita>) {
    super();
    Object.assign(this, init);
  }
}

export async function getAllBerita(): Promise<Berita[]> {
  const beritas = await Berita.findAll();

  console.log(`getAllBerita: ${JSON.stringify(beritas)}`);

  return beritas;
}
