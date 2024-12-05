const { execSync } = require("child_process");

// Capture arguments from the command line
const args = process.argv.slice(2);
const name = args[0];
const attributes = args[1];

// Validate arguments
if (!name || !attributes) {
  console.error("Usage: npm run generate-model -- <name> <attributes>");
  process.exit(1);
}

// Build the command and execute it
try {
  const command = `npx sequelize-cli model:generate --name ${name} --attributes ${attributes}`;
  console.log(`Executing: ${command}`);
  execSync(command, { stdio: "inherit" });
} catch (error) {
  console.error("Error executing Sequelize command:", error.message);
  process.exit(1);
}
