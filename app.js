const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_mflix',
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log('Connected to Database');
  db = client.db(dbName);
  collection = db.collection('movies');
});

app.set('view engine', 'ejs');
// When someone visit our route page the public directory will give the file it needs
app.use(express.static('public'));
// Parse URLs
app.use(express.urlencoded({ extended: true }));
// Parse as json objects when sending and retrieving data
app.use(express.json());
//
app.use(cors());

app.get('/', async (req, res) => {
  try {
    res.render('index.ejs', {});
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
