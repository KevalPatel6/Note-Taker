const express = require('express');
const notes = require('./public/routes/notes')
const landingPage = require('./public/routes/landingpage')

const PORT = 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/notes', notes)

app.use('*', landingPage )

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`)
})