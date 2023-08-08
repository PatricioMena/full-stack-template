const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

app.use(cors());

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_mflix',
  collection;

MongoClient.connect('dbConnectionString').then((client) => {
  console.log('Connected to Database');
  db = client.db(dbName);
  colletion = db.collection('movies');
});
