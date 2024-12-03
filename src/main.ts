import { sequelize, testMySqlConnection } from './db/mysql';
import { Admin } from './models/admin_model';


const boostrap = () => {

  (async () => {
    try {
      await testMySqlConnection();

      await sequelize.sync({ force: true })
    } catch (error) {
      console.error("Unable to create table:", error);
    }
  })();
}

boostrap();