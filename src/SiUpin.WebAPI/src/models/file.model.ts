import { Column, Table } from "sequelize-typescript";
import { Entity, IEntity } from "./entity.model";

interface IFile extends IEntity {
  FileID: string;
  EntityID: string;
  EntityType: string;
  Name: string;
  Description: string;
  UphID: string;
  UphProdukID: string;
  UserID: string;
}

@Table({
    modelName: "File",
    tableName: "files",
  })
  export class File extends Entity<IFile> implements IFile {
    @Column({ primaryKey: true })
    public FileID!: string;

    @Column
    public EntityID!: string;
    @Column
    public EntityType!: string;
    @Column
    public Name!: string;
    @Column
    public Description!: string;
    @Column
    public UphID!: string;
    @Column
    public UphProdukID!: string;
    @Column
    public UserID!: string;

    public constructor(init?: Partial<File>) {
      super();
      Object.assign(this, init);
    }
  }