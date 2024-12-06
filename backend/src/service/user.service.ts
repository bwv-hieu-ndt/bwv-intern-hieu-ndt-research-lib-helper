import sequelizeConnection from '@/database/connection';
import UserModel from '@/database/models/user.model';
import { UserInputDto } from '@/dto/user_input.dto';
import { IUser } from '@/interface';
import { validate } from 'class-validator';
import _ from 'lodash';

class UserService {
  public async createUser(dto: UserInputDto): Promise<IUser> {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors}`);
    }

    const transaction = await sequelizeConnection.transaction();

    try {
      const newUser = await UserModel.create(dto, { transaction });
      await transaction.commit();

      return newUser.toJSON() as IUser;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // Lodash paging
  public async getAllUser(page: number, pageSize: number): Promise<any> {
    const users = await UserModel.findAll();

    // const pageSize = 10;
    // const page = 2;
    const paginatedUsers = _.chunk(users, pageSize)[page - 1];

    return paginatedUsers;
  }

  public async getUserById(id: string): Promise<IUser> {
    const user = await UserModel.findOne({ where: { id: id } });
    return user.toJSON() as IUser;
  }

  public async deleteUser(id: number): Promise<Boolean> {
    const deleteUser = await UserModel.findOne({ where: { id: id } });
    if (deleteUser) {
      await deleteUser.destroy();
    }
    return true;
  }

  // Lodash
  public getUserSortByBirthDay = async (): Promise<any> => {
    const users = await UserModel.findAll();

    const sortedUsers = _.sortBy(users, 'gender');

    return sortedUsers;
  };
}

export default UserService;
