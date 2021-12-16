const frisby = require('frisby');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const mongoDbUrl = 'mongodb://localhost:27017';
const url = 'http://localhost:3001';

describe('A aplicação deverá ter o endpoint POST `/specie` para permitir o cadastro de uma espécie', () => {
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

// posteriormente implementar esses testes
describe('A aplicação deverá ter o endpoint PUT `/specie/:id/image` para permitir a adição de uma imagem nas espécies cadastradas', () => {
  it('Será validado que não é possível adicionar a imagem passando outros dados além de "id", "image"', () => {});

  it('Será validado que a imagem é adicionada com sucesso', () => {})
});

describe('A aplicação deverá permitir a visualização das imagens', () => {
  it('Será validado que a aplicação carrega a imagem', () => {})
});

describe('A aplicação deverá ter o endpoint GET `/specie` para listar as espécies cadastradas', () => {
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
    const listSpecies = [
      {
        reino: 'Animalia',
        filo: 'Chordata',
        classe: 'Aves',
        ordem: 'Falconiformes',
        subOrdem: '',
        familia: 'Falconidae',
        genero: 'Falco',
        especie: 'F. peregrinus',
        subEspecie: "",
        nome: "Falco peregrinus"
      },
      {
        reino: 'Animalia',
        filo: 'Chordata',
        classe: 'Aves',
        ordem: 'Passeriformes',
        subOrdem: '',
        familia: 'Falconidae',
        genero: 'Pitangus',
        especie: 'F. columbarius',
        subEspecie: '',
        nome: 'Esmerilhão'
      },
    ];
    await db.collection('specie').insertMany(listSpecies);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Será validado que é possível cadastrar uma espécie com sucesso', async () => {
    await frisby
      .get(`${url}/recipes/`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        
        expect(result[0].reino).toBe('Animalia');
        expect(result[0].filo).toBe('Chordata');
        expect(result[0].classe).toBe('Aves');
        expect(result[0].ordem).toBe('Falconiformes');
        expect(result[0].subOrdem).toBe('');
        expect(result[0].familia).toBe('Falconidae');
        expect(result[0].genero).toBe('Falco');
        expect(result[0].especie).toBe('F. peregrinus');
        expect(result[0].subEspecie).toBe('');
        expect(result[0].nome).toBe('Falco peregrinus');

        expect(result[1].reino).toBe('Animalia');
        expect(result[1].filo).toBe('Chordata');
        expect(result[1].classe).toBe('Aves');
        expect(result[1].ordem).toBe('Passeriformes');
        expect(result[1].subOrdem).toBe('');
        expect(result[1].familia).toBe('Falconidae');
        expect(result[1].genero).toBe('Pitangus');
        expect(result[1].especie).toBe('F. columbarius');
        expect(result[1].subEspecie).toBe('');
        expect(result[1].nome).toBe('Esmerilhão');
      });
  });

});
