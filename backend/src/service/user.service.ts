import sequelizeConnection from '@/database/connection';
import UserModel from '@/database/models/user.model';
import { UserInputDto } from '@/dto/user_input.dto';
import { IUser } from '@/interface';
import { validate } from 'class-validator';

class UserService {
  public async createUser(dto: UserInputDto): Promise<void> {
    const transaction = await sequelizeConnection.transaction();

    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors}`);
    }

    try {
      await UserModel.create(dto, { transaction: transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();

      throw new Error(`User creation failed: ${error.message}`);
    }
  }

  public async getAllUser(): Promise<UserModel[]> {
    const users = await UserModel.findAll();
    return users;
  }

  public async getUserById(id: number): Promise<UserModel | null> {
    const user = await UserModel.findOne({ where: { id: id } });
    return user;
  }

  public async deleteUser(id: number): Promise<Boolean> {
    const deleteUser = await UserModel.findOne({ where: { id: id } });
    if (deleteUser) {
      await deleteUser.destroy();
    }
    return true;
  }
}

export default UserService;
