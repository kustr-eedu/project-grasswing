import express from 'express';
import cors from 'cors';
import pg from 'pg'

const { Pool } = pg;


const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_SERV,
  password: process.env.PSQL_KEY,
  port: process.env.PSQL_PORT
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version();')

    res.json({
      success: true,
      message: 'Successfully connected to default postgres database',
      serverTime: result.rows[0].current_time,
      pgVersion: result.rows[0].version
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Connection to default postgres database was unsuccessful',
      details: err.message
    })
  }
})

app.listen(5432, () => {
  console.log('Successful connection to postgreSQL')
})
