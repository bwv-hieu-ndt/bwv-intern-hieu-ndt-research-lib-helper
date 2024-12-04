"use strict";

// src/database/models/generate_script.js
var { execSync } = require("child_process");
var args = process.argv.slice(2);
var name = args[0];
var attributes = args[1];
if (!name || !attributes) {
  console.error("Usage: npm run generate-model -- <name> <attributes>");
  process.exit(1);
}
try {
  const command = `npx sequelize-cli model:generate --name ${name} --attributes ${attributes}`;
  console.log(`Executing: ${command}`);
  execSync(command, { stdio: "inherit" });
} catch (error) {
  console.error("Error executing Sequelize command:", error.message);
  process.exit(1);
}
//# sourceMappingURL=generate_script.js.map