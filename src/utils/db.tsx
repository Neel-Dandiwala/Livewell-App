// // db.ts
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432', 10),
//   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
// });

// console.log(pool);

// export default pool;

import {Pool} from 'pg';
// Create a pool instance and pass in our config, which we set in our env vars

let conn;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "livewell",
  });
}

console.log(conn)

export { conn };