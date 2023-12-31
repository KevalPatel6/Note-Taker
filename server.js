const express = require('express');
const notesPage = require('./routes/notesPage.js')
const notesRouter = require('./routes/apiNotes.js')
const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/notes', notesPage)

app.use('/api/notes', notesRouter)

app.use('*', (req,res)=>
res.sendFile(path.join(__dirname, './public/index.html')))

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`)
})