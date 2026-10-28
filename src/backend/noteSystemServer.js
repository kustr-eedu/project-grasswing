import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  server: process.env.PSQL_SERV,
  database: process.env.PSQL_DATABASE,
  port: process.env.PSQL_PORT,
  user: process.env.PSQL_USER,
  password: process.env.PSQL_KEY,
})

const getNotes = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query('SELECT * FROM notes', (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows)
        } else {
          reject(new Error('No information was found'))
        }
      })
    })
  } catch (error_1) {
    console.error(error_1);
    throw new Error('Internal server error')
  }
}
