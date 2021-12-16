const frisby = require('frisby');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const mongoDbUrl = 'mongodb://localhost:27017';
const url = 'http://localhost:3001';

describe('1 - A aplicação deverá ter o endpoint POST `/specie` ', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('Specie');
  });

  beforeEach(async () => {
    await db.collection('specie').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Será validado que não é possível cadastrar uma espécie sem o campo "name"', async () => {
    await frisby
      .post(`${url}/specie`, {
        reino: 'Animalia',
        filo: 'Chordata',
        classe: 'Aves',
        ordem: 'Passeriformes',
        subOrdem: 'Tyranni',
        familia: 'Tyrannidae',
        genero: 'Pitangus',
        especie: 'P. sulphuratus',
        subEspecie: ""
      })
      .expect('status', 400)
      .then((responseLogin) => {
        const { json } = responseLogin;
        expect(json.message).toBe('the fields "Reino", "Filo", "Classe", "Ordem", "SubOrdem", "Familia", "Genero", "Especie", "Nome" are required.');
      });
  });

  it('Será validado que não é possível cadastrar uma espécie sem o campo "Especie"', async () => {
    await frisby
    .post(`${url}/specie`, {
      reino: 'Animalia',
      filo: 'Chordata',
      classe: 'Aves',
      ordem: 'Passeriformes',
      subOrdem: 'Tyranni',
      familia: 'Tyrannidae',
      genero: 'Pitangus',
      subEspecie: "",
      nome: "Bem-te-vi"
    })
    .expect('status', 400)
    .then((responseLogin) => {
      const { json } = responseLogin;
      expect(json.message).toBe('the fields "Reino", "Filo", "Classe", "Ordem", "SubOrdem", "Familia", "Genero", "Especie", "Nome" are required.');
    });
  });

  it('Será validado que é possível cadastrar uma espécie com sucesso', async () => {
    await frisby
    .post(`${url}/specie`, {
      reino: 'Animalia',
      filo: 'Chordata',
      classe: 'Aves',
      ordem: 'Passeriformes',
      subOrdem: 'Tyranni',
      familia: 'Tyrannidae',
      genero: 'Pitangus',
      especie: 'P. sulphuratus',
      subEspecie: "",
      nome: "Bem-te-vi"
    })
    .expect('status', 201)
    .then((responseLogin) => {
      const { json } = responseLogin;
      expect(json).toHaveProperty('_id');
      expect(json.reino).toBe('Animalia');
      expect(json.filo).toBe('Chordata');
      expect(json.classe).toBe('Aves');
      expect(json.ordem).toBe('Passeriformes');
      expect(json.subOrdem).toBe('Tyranni');
      expect(json.familia).toBe('Tyrannidae');
      expect(json.genero).toBe('Pitangus');
      expect(json.especie).toBe('P. sulphuratus');
      expect(json.subEspecie).toBe('');
      expect(json.nome).toBe('Bem-te-vi');
    });
  });

});
