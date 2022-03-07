import { Column, Table } from "sequelize-typescript";
import { Entity, IEntity } from "./entity.model";

interface IUser extends IEntity {
  UserID: string;
  id: string;
  RoleID: string;
  ProvinsiID: string;
  KotaID: string;
  KecamatanID: string;
  KelurahanID: string;
  Username: string;
  Fullname: string;
  Email: string;
  NIP: string;
  Jabatan: string;
  Instansi: string;
  Telepon: string;
  Alamat: string;
  PasswordHash: string;
  PasswordSalt: string;
  PictureURL: string;
}

@Table({
  modelName: "User",
  tableName: "users",
})
export class User extends Entity<IUser> implements IUser {
  @Column({ primaryKey: true })
  public UserID!: string;

  @Column
  public id!: string;

  @Column
  public RoleID!: string;

  @Column
  public ProvinsiID!: string;

  @Column
  public KotaID!: string;

  @Column
  public KecamatanID!: string;

  @Column
  public KelurahanID!: string;

  @Column
  public Username!: string;

  @Column
  public Fullname!: string;

  @Column
  public Email!: string;

  @Column
  public NIP!: string;

  @Column
  public Jabatan!: string;

  @Column
  public Instansi!: string;

  @Column
  public Telepon!: string;

  @Column
  public Alamat!: string;

  @Column
  public PasswordHash!: string;

  @Column
  public PasswordSalt!: string;

  @Column
  public PictureURL!: string;

  public constructor(init?: Partial<User>) {
    super();
    Object.assign(this, init);
  }
}
