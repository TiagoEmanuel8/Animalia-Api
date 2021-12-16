const { MongoClient } = require('mongodb');

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };


const MONGO_DB_URL = 'mongodb://mongodb:27017/SpeciesDB';

const DB_NAME = 'specie';

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db(DB_NAME));

module.exports = connection;
