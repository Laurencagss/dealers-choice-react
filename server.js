const express = require('express');
const path = require('path');
const app = express();
const {syncAndSeed, db, models: {Teacher, Class, Student} } = require('./db.js')
const PORT = 3000;

//takes you to the homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
}
)


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
    