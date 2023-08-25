const notesPage = require("express").Router()
const path = require('path')


notesPage.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})


module.exports = notesPage