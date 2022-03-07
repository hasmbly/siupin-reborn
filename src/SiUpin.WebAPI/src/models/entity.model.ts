import { Model } from "sequelize-typescript";
import { Column, CreatedAt, UpdatedAt } from "sequelize-typescript";

export interface IEntity {
  CreatedBy: string;
  Created: Date;
  LastModified: Date;
}

export class Entity<
    TModelAttributes extends {} = any,
    TCreationAttributes extends {} = TModelAttributes
  >
  extends Model<TModelAttributes, TCreationAttributes>
  implements IEntity
{
  @CreatedAt
  public Created!: Date;

  @UpdatedAt
  public LastModified!: Date;

  @Column
  public CreatedBy!: string;
}
