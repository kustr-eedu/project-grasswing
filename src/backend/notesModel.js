import 'dotenv/config';
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
      pool.query(`SELECT * FROM notes;`, (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows[0]) {
          resolve(results.rows)
        } else {
          reject(new Error("No information was found on this database. :/"))
        }
      })
    })
  } catch (error_1) {
    console.error(error_1);
    throw new Error('Internal server error')
  }
}

const deleteNotes = (id) => {
  try {
    return new Promise(function (resolve, reject) {
      pool.query(`DELETE FROM notes where id = $1;`, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Your note has been successfully deleted! :) ${JSON.stringify(results.rows[0])}`)
      })
    })
  } catch (error_1) {
    console.error(error_1);
    throw new Error('Internal server error')
  }
}

const createNotes = (body) => {
  try {
    const { notes } = body;
    return new Promise(function (resolve, reject) {
      pool.query(`INSERT INTO notes (notes) VALUES ($2) RETURNING *;`,
        [notes],
        (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`A new note has been successfully added! :) ${JSON.stringify(results.rows[0])}`)
        } else {
          reject(new Error(`Your note couldn't be added successfully. :/`))
        }
      })
    })
  } catch (error_1) {
    console.error(error_1);
    throw new Error('Internal server error')
  }
}

const updateNotes = (id, body) => {
  try {
    const { note } = body;
    return new Promise(function (resolve, reject) {
      pool.query(`UPDATE notes SET note $1 WHERE id = $2 RETURNING *;`, [note, id], (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`A note has been successfully updated! :) ${JSON.stringify(results.rows[0])}`)
        } else {
          reject(new Error("Sorry, your note couldn't be updated. :/"))
        }
      })
    })
  } catch (error_1) {
    console.error(error_1);
    throw new Error('Internal server error')
  };
}

export default {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes
}
