const notesPage = require("express").Router()
const path = require('path')
const notes = require('../../db/db.json')
const fs = require('fs')


notesPage.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../notes.html'))

    console.info(`${req.method} request received to get notes`)
})

notesPage.post('/', (req,res)=>{
    console.info(`${req.method} request recieved to post notes`)

if(title && text){
    const newNote = {
        title,
        text,
    }
    
    notes.push(newNote)

    const newNoteString = JSON.stringify(newNote)

    fs.writeFile('../../db/db.json', newNoteString, (err)=>
        err
        ?   console.log(err)
        :  console.log(
            `${newNote.title} has been written to the database json file`
        )

    )



}
    


  
})



module.exports = notesPage