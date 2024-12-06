import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import { IUser } from '@/interface';
import { Gender } from '@/enum';

class UserModel extends Model<IUser> {}

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
  },
  {
    sequelize: connection,
    modelName: 'User',
  },
);

export default UserModel;
