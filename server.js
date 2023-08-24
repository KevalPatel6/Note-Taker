const express = require('express');
const notesPage = require('./public/routes/notesPage.js')
const notesRouter = require('./public/routes/apiNotes.js')
const landingPage = require('./public/routes/landingPage.js')

const PORT = 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/notes', notesPage)

app.use('/api/notes', notesRouter)

app.use('*', landingPage)

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`)
})