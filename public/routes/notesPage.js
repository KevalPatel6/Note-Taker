const notesPage = require("express").Router()
const path = require('path')


notesPage.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'))
})


module.exports = notesPage