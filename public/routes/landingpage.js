const landingPage = require('express').Router()
const path = require('path')

landingPage.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = landingPage