import UserModel from "../../database/models/user"

class UserService {
  public async createUser(user: UserModel): Promise<UserModel> {
    const newUser = UserModel.create({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      updatedAt: new Date(),
      deletedAt: new Date(),
      createdAt: new Date(),
    })
    return newUser;
  }

  public async getAllUser(): Promise<UserModel[]> {
    const users =  await UserModel.findAll()
    return users;
  }

  public async getUserById(id: number): Promise<UserModel|null> {
    const user =  await UserModel.findOne({ where: { id: id }  })
    return user;
  }

  public async deleteUser(id: number): Promise<Boolean> {
    const deleteUser =  await UserModel.findOne({ where: { id: id } })    
    if(deleteUser) {
      await deleteUser.destroy();
    }
    return true;
  }
}

export default UserService