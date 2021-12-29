const { Client } = require('pg');

export const client = new Client({
  host: process.env.POSTGRESQL_HOST,
  user: process.env.POSTGRESQL_USERNAME,
  port: process.env.POSTGRESQL_PORT,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE_NAME
});