import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import { IUser } from '@/interface';
import { Gender } from '@/enum';

class UserModel extends Model<IUser> implements IUser {
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

UserModel.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    spendingMoney: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
  },
);

export default UserModel;
