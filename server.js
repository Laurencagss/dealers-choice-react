const express = require('express');
const path = require('path');
const app = express();
const {syncAndSeed, db, models: {Teacher, Class, Student} } = require('./db.js');
const PORT = 3000;


//takes you to the homepage index.html
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
}
)

app.get('/classes', async (req, res, next) => {
  try {
      res.send(await Class.findAll())
  }
  catch(error) {
      next(error)
  }
})

app.get('/teachers', async (req, res, next) => {
  try {
      res.send(await Teacher.findAll())
  }
  catch(error) {
      next(error)
  }
})

app.get('/students', async (req, res, next) => {
  try {
      res.send(await Student.findAll())
  }
  catch(error) {
      next(error)
  }
})

        const init = async()=>{
            try {
              await syncAndSeed();
              await app.listen(PORT, ()=>{
                console.log(`listening on port ${PORT}`)
              })
            }
            catch(e){
              console.log(e)
            }
          }
          init();
    
          module.exports = {
            syncAndSeed,
            db,
            Class,
            Teacher, 
            Student
          };