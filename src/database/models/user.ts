import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

export interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  updatedAt?: Date;
  deletedAt?: Date;
  createdAt?: Date;
}

class UserModel extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;

  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
  public readonly createdAt!: Date;
}

UserModel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);

// associate
// Todo.belongsTo(User, {
//   as: 'user',
//   foreignKey: {
//     name: 'user_id',
//     allowNull: false,
//   },
//   foreignKeyConstraint: true,
// });

export default UserModel;