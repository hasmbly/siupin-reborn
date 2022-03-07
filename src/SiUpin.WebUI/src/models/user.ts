export interface User {
  UserID: string;
  CreatedBy?: any;
  id: string;
  RoleID: string;
  ProvinsiID: string;
  KotaID: string;
  KecamatanID: string;
  KelurahanID?: any;
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
  PictureURL?: any;
  Created: string;
  LastModified: string;
}