import express from 'express';
import cors from 'cors';
import notes_Modules from './notesModel.js'

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
  try {
    notes_Modules.getNotes()
      .then(response => {
        res.status(200).send(response);
      })
  } catch(err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "The connection with your SQL database was unsuccessful. :(",
      details: err.message
    })
  }
})

app.post('/create', async (req, res) => {
  try {
    notes_Modules.createNotes(req.body)
      .then(response => {
        res.status(200).send(response);
      })
  } catch(err) {
    console.error(err);
    res.status(500).send(err)
  }
})

app.delete('/delete:id', async (req, res) => {
  try {
    notes_Modules.deleteNotes(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
  } catch(err) {
    console.error(err);
    res.status(500).send(err)
  }
})

app.put('/update:id', async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    notes_Modules.deleteNotes(id, body)
      .then(response => {
        res.status(200).send(response);
      })
  } catch(err) {
    console.error(err);
    res.status(500).send(err)
  }
})

app.listen(3001, () => {
  console.log(process.env.PSQL_USER, process.env.PSQL_DATABASE);
})
