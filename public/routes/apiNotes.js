const notesRouter = require('express').Router()
const notes = require('../../db/db.json')
const fs = require('fs')
const path = require('path')
const uniqueID = require('../../helpers/uuid')

notesRouter.get('/', (req,res)=>{
   res.json(notes)
   
   })

notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request recieved to post notes`);

    const { title, text } = req.body

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uniqueID()
        }

     
        notes.push(newNote)

        const newNoteString = JSON.stringify(notes)
        console.log(newNoteString)
        fs.writeFile(path.join(__dirname, '../../db/db.json'), newNoteString, (err) =>
            err
                ? console.log(err)
                : console.log(
                    `${newNote.title} has been written to the database json file`
                )
        )
    res.sendStatus(201)
    console.log(newNote)
    }
    else{
        res.sendStatus(500).json('Error in posting note')
    }

})


module.exports = notesRouter