"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database/models/user.ts
var user_exports = {};
__export(user_exports, {
  default: () => user_default
});
module.exports = __toCommonJS(user_exports);
var import_sequelize2 = require("sequelize");

// src/database/connection.ts
var import_sequelize = require("sequelize");
var sequelizeConnection = new import_sequelize.Sequelize("prepare", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306
});
var connection_default = sequelizeConnection;

// src/database/models/user.ts
var UserModel = class extends import_sequelize2.Model {
  id;
  firstName;
  lastName;
  email;
  password;
  updatedAt;
  deletedAt;
  createdAt;
};
UserModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: import_sequelize2.DataTypes.INTEGER
    },
    firstName: {
      type: import_sequelize2.DataTypes.STRING
    },
    lastName: {
      type: import_sequelize2.DataTypes.STRING
    },
    email: {
      type: import_sequelize2.DataTypes.STRING
    },
    password: {
      type: import_sequelize2.DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: import_sequelize2.DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: import_sequelize2.DataTypes.DATE
    }
  },
  {
    sequelize: connection_default,
    modelName: "User"
  }
);
var user_default = UserModel;
//# sourceMappingURL=user.js.map