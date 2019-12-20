const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config();

const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.get('/', (req, res) => {
  res.send('hello world!')
})




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
