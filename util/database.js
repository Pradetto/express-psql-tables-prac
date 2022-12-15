const { Pool } = require("pg");

// const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const connect = () => pool.connect();

module.exports = {
  connect,
  query: (text, params) => pool.query(text, params),
};
