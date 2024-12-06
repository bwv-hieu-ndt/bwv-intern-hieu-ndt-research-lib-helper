export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday?: Date;
  gender: string;
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  spendingMoney: BigInt;
}
