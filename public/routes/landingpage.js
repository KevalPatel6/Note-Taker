const landingPage = require('express').Router()

landingPage.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'../index.html'))
})

module.exports = landingPage