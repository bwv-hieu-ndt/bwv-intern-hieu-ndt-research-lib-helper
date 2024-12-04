"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api/user/user_route.ts
var user_route_exports = {};
__export(user_route_exports, {
  default: () => user_route_default
});
module.exports = __toCommonJS(user_route_exports);
var import_express = __toESM(require("express"));

// src/database/models/user.ts
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

// src/api/user/user_service.ts
var UserService = class {
  async createUser(user) {
    const newUser = user_default.create({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      updatedAt: /* @__PURE__ */ new Date(),
      deletedAt: /* @__PURE__ */ new Date(),
      createdAt: /* @__PURE__ */ new Date()
    });
    return newUser;
  }
  async getAllUser() {
    const users = await user_default.findAll();
    return users;
  }
  async getUserById(id) {
    const user = await user_default.findOne({ where: { id } });
    return user;
  }
  async deleteUser(id) {
    const deleteUser = await user_default.findOne({ where: { id } });
    if (deleteUser) {
      await deleteUser.destroy();
    }
    return true;
  }
};
var user_service_default = UserService;

// src/api/user/user_controller.ts
var UserController = class {
  userService;
  constructor() {
    this.userService = new user_service_default();
  }
  async createUser(req, res) {
    const user = req.body;
    try {
      const newUser = await this.userService.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }
  async getAllUser(req, res) {
    try {
      const users = await this.userService.getAllUser();
      res.status(201).json(users);
    } catch (error) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }
  async getUserById(id) {
    try {
      const user = await this.userService.getUserById(id);
      return user;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
  async deleteUser(id) {
    try {
      const result = await this.userService.deleteUser(id);
      return result;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
};
var user_controller_default = UserController;

// src/api/user/user_route.ts
var UserRoute = class {
  path = "/users";
  router = import_express.default.Router();
  userController = new user_controller_default();
  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.route(`${this.path}`).get(this.userController.getAllUser).post(this.userController.createUser);
  }
};
var user_route_default = UserRoute;
//# sourceMappingURL=user_route.js.map