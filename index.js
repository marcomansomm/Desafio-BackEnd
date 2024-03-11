const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/index.router');
const conn = require('./src/database/conn');
const app = express();
const port = 3334;
  
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes) 

conn();

app.listen(port, () => {
  console.log(`App listening on port ${port}`); 
});
