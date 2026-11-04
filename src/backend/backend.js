import express from 'express';
import notes_Modules from './notesModel.js'

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  try {
    notes_Modules.getNotes()
      .then(response => {
        res.status(200).send(response);
      })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "The connection with your SQL database was unsuccessful. :(",
      details: err.message
    })
  }
})

app.post('/create', (req, res) => {
  try {
    notes_Modules.createNotes(req.body)
      .then(response => {
        res.status(200).send(response);
      })
  } catch (err) {
    console.error(err);
    res.status(500).send(err)
  }
})

app.listen(3001, () => {
  console.log(process.env.PSQL_USER, process.env.PSQL_DATABASE);
})
