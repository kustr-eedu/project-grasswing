import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

const { Pool } = pg;

const pool = new Pool({
  server: process.env.PSQL_SERV,
  database: process.env.PSQL_DATABASE,
  port: process.env.PSQL_PORT,
  user: process.env.PSQL_USER,
  password: process.env.PSQL_KEY,
})

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT * from notes;')

    res.json({
      success: true,
      message: 'Established connection with your SQL database!',
      rows: result.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'The connection with your SQL database was unsuccessful.',
      details: err.message
    })
  }
})

app.listen(3001, () => {
  console.log(process.env.PSQL_USER, process.env.PSQL_DATABASE);
})
