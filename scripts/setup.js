const { Client } = require("pg");

const client = new Client({
  user: "your_username",
  host: "your_host",
  database: "excel_sheet",
  password: "your_password",
  port: 5432,
});

client.connect();

async function setup() {
  try {
    // Create a predefined user
    await client.query("INSERT INTO users(username, password) VALUES($1, $2)", [
      "predefined_user",
      "password123",
    ]);

    // Create a predefined formula
    await client.query(
      "INSERT INTO formulas(name, expression) VALUES($1, $2)",
      ["average", "(cell1 + cell2 + cell3) / 3"]
    );
  } catch (error) {
    console.error("Error setting up predefined data:", error);
  } finally {
    client.end();
  }
}

setup();
