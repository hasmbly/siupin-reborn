import { Model, PrimaryKey, Column, Table, Index } from "sequelize-typescript";

interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

@Table
class User extends Model<IUser> implements IUser {
  @PrimaryKey
  @Column
  public UserID!: string;

  @Index
  public name!: string;

  @Index
  public username!: string;

  @Index
  public email!: string;
  public password!: string;
  public phoneNumber!: string;

  public constructor(init?: Partial<User>) {
    super();
    Object.assign(this, init);
  }
}

async function createUser() {
  const newUser = await User.create(
    new User({
      username: "test 01",
      email: "abc@mail.com",
      name: "blabla",
    })
  );

  console.log(newUser.id, newUser.name, newUser.email);

  const foundUser = await User.findOne({
    where: { username: "", email: "" },
  });

  if (foundUser === null) return;

  console.log(foundUser.name);
}
