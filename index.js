const express = require('express');
const cors = require('cors');
// const routes = require('./routes');
const conn = require('./src/database/conn');
const app = express();
const port = 3333;
  
app.use(express.json());  

conn();

app.listen(port, () => {
  console.log(`App listening on port ${port}`); 
});
