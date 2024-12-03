import { Sequelize } from 'sequelize';

import dotenv from 'dotenv'
import { Admin } from '@/models/admin_model';
dotenv.config()

export const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USERNAME || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || '',
    port: 3306,
    dialect: 'mysql'
  }
);

export const testMySqlConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }  
}