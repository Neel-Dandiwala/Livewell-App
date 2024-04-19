// import {Pool} from 'pg';

// let conn : any;

// if (!conn) {
//   conn = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: "livewell",
//   });
// }

// export { conn };

import pg from 'pg';

const { Pool } = pg;

const conn = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

export { conn };

