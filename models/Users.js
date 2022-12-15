const db = require("../util/database");

const createUserTable = async () => {
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )`
    );
  } catch (err) {
    console.error("Error creating users table", err);
    throw err;
  }
};

const User = {
  async create(username, password) {
    try {
      await createUserTable();
      const { rows } = await db.query(
        "INSERT INTO users (username,password) Values ($1, $2) RETURNING *",
        [username, password]
      );
      return rows[0];
    } catch (err) {
      console.error("Error creating users", err.stack);
      throw err;
    }
  },
  async getAll() {
    try {
      const { rows } = await db.query("SELECT * FROM users");
      return rows;
    } catch (err) {
      console.error("Error creating users", err.stack);
      throw err;
    }
  },
};

module.exports = {
  User,
};
