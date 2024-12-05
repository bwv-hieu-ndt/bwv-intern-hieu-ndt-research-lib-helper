import { Sequelize } from 'sequelize';
import { DB_NAME } from '@/utils/configs';

const sequelizeConnection: Sequelize = new Sequelize('prepare', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

export const testConnection = () => {
  sequelizeConnection
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((error: any) => {
      console.error('Unable to connect to the database: ', error);
    });
};

export default sequelizeConnection;
