import UserModel from '@/database/models/user.model';
import { faker } from '@faker-js/faker';
import { IUser } from './interface';

const random = () => {
  Math.random();
};

async function generateUsers() {
  const users: IUser[] = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      gender: '2',
      birthday: faker.date.birthdate(),
      username: faker.internet.username(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  try {
    await UserModel.bulkCreate(users);
    console.log('50 Users successfully created!');
  } catch (error) {
    console.error('Error creating users:', error);
  }
}

generateUsers();
