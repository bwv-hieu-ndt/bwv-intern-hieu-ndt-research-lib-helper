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

// src/database/connection.ts
var connection_exports = {};
__export(connection_exports, {
  default: () => connection_default
});
module.exports = __toCommonJS(connection_exports);
var import_sequelize = require("sequelize");
var sequelizeConnection = new import_sequelize.Sequelize("prepare", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306
});
var connection_default = sequelizeConnection;
//# sourceMappingURL=connection.js.map