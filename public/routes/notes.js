const notes = require("express").Router()
const path = require('path')

notes.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../notes.html'))

})

module.exports = notes