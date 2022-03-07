import { pbkdf2Sync } from "pbkdf2";

const _appUtility = {
  CreatePasswordHash(password: string, passwordSalt: string): string {
    const hash: Buffer = pbkdf2Sync(
      password,
      Buffer.from(passwordSalt, "utf8"),
      10000,
      256 / 8,
      "sha512"
    );

    return hash.toString("base64");
  },

  VerifyPasswordHash(
    password: string,
    passwordSalt: string,
    passwordHash: string
  ): boolean {
    return this.CreatePasswordHash(password, passwordSalt) == passwordHash;
  },
};

export default _appUtility;
