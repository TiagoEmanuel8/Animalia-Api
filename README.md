# Boas vindas ao projeto Species-API

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é o Species Api?](#o-que-é-o-species-api)
- [Deploy](#deploy)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Documentação API](#documentação-api)
- [Testes](#testes)
- [Instalação e uso](#instalação-e-uso)

---

#  Comentários sobre o projeto

Durante a época de escola uma das minhas matérias favoritas era a biologia, e dentre os assuntos que mais gostava o estudo dos reinos biológicos (animal, vegetal, fungi, protista e monera) era algo que despertava muito minha curiosidade, tanto que chegava a passar horas e horas em livros lendo sobre o assunto e aprendendo.

Uma parte que achava bastante interessante era o padrão para nomear um ser vivo pertencente a um reino, a forma com que os taxonomistas organizaram isso, após o módulo de back end no curso da Trybe, curti bastante a atuação dessa área e decidi fazer uma pequena contribuição dos meus conhecimentos atuais com esses conhecimentos da infância e assim nasceu a ideia desse projeto.

Esse projeto foi especial porque além dessa parte de classificação de seres vivos, foi um projeto que fiz em TDD usando o Jest. também aprendi a usar o mongoose e o mongo Atlas, além de ser a minha primeira experiência com deploy de api. também consolidei bastante conhecimentos no nodejs e multer.

possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

---

# O que é o Species Api?

Uma aplicação Back end onde é possível registrar, listar e editar a taxonomia (classificar espécies) de seres vivos, também é possível adicionar imagem para representar cada espécie

---

# Deploy
Acesse https://specieapi.herokuapp.com/ e veja a API rodando em tempo real em sua máquina.
*obs: inicialmente cadastrei apenas 3 espécies no banco de dados, então a API só irá retornar essas espécies*

---

# Tecnologias envolvidas:
 - Javascript
 - NodeJs
 - MongoDB
 - Jest
 - Mongoose
 - Mongo Atlas
 - Multer
 - Heroku

---

# Funcionalidades

- Cadastrar uma nova espécie
- Adicionar imagem da nova espécie
- Listar todas as espécies
- Listar apenas uma espécie
- Editar uma espécie

*Obs: Não achei que fazia sentido criar um método para deletar uma espécie, pois mesmo que sua espécie tenha sido extinta ainda seria válido deixar seu registro e no caso de erro durante o cadastro de uma espécie é possível editar.*

---

# Documentação API

### 1 - A aplicação tem o endpoint `POST /specie`


Esse endpoint é responsável pelo cadastro de uma nova espécie
Os campos `reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome` são esperados na requisição

*Exemplo de requisição*

![1 - sucesso](https://user-images.githubusercontent.com/72472530/146947897-e7c8434d-7fde-46cd-934d-cc6a520bb55a.png)

Será validado que os campos `reino, filo, classe, ordem,	familia, genero, especie e nome` são **obrigatórios**


*No exemplo abaixo fiz a requisição sem o campo "name", porém o mesmo erro iria se repetir se algum dos campos obrigatórios não fossem enviados na requisição*

![1 - caso de erro](https://user-images.githubusercontent.com/72472530/146947938-df82ac2d-024e-40d4-ae35-39d1c8525e34.png)

### 2 - A aplicação tem o endpoint `PATCH /specie/:id/image`
Esse endpoint é responsável por adicionar uma nova imagem a uma espécie previamente cadastrada.

O campo **id** deve corresponder ao id da espécie cadastrada

*exemplo de requisição*

![2 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948147-e453d7ea-7ed1-416d-a829-174156145bf7.png)

Ao clicar na url a imagem será carregada

![2 - caso de erro](https://user-images.githubusercontent.com/72472530/146948187-4ca5c39d-aad8-46d9-95ed-37e1c84da763.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![2 - id invalido](https://user-images.githubusercontent.com/72472530/146543714-ec9d0b08-dc4e-4e27-aa40-4258b672df7b.png)

### 3 - A aplicação tem o endpoint `GET /specie`

Esse endpoint é responsável por listar todas as espécies cadastradas no banco de dados.

*exemplo de requisição*

![3 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948252-9bb74846-b1c2-494f-8953-3ef6deb80c7b.png)

### 4 - A aplicação tem o endpoint `GET /specie/:id`

Esse endpoint é responsável por listar uma espécie através do **id**

*exemplo de requisição*

![4 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948303-5ba1b785-883f-41a0-bcd6-002f74b9e6c4.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![4 - caso de erro](https://user-images.githubusercontent.com/72472530/146948337-3be68a5f-55ca-41bf-9305-7abee7d7b7d1.png)

### 5 - A aplicação tem o endpoint `PATCH /specie/:id`

Esse endpoint é responsável por editar dados de uma espécie previamente cadastrada

Nessa requisição devem ser enviados dados através do **id** que corresponde a uma espécie preciamente cadastrada, e no corpo da requisição devem ser enviados o dado a ser alterado

*exemplo de requisição*

![5 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948377-44127e98-31b6-4cb7-adc5-fa8cf4bd37ec.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![5 - caso de erro](https://user-images.githubusercontent.com/72472530/146948463-f8cc718a-8f5d-4190-b10e-b0da3c74bc79.png)

---

# Testes

É possível abrir o terminal dentro da aplicação e digitar o comando `npm test specie.test.js` ou `npm test` para testar a aplicação

![2021-12-16-17-46-39](https://user-images.githubusercontent.com/72472530/146544916-712b61c9-0195-4acc-9320-f9d22a304975.gif)

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v16.8.0  
- npm 7.21.0  
- git version 2.17.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone [https://github.com/TiagoEmanuel8/species-Api.git](https://github.com/TiagoEmanuel8/species-Api.git)  
  
```  
  
Entre na pasta  
  
```  
cd species-Api 
  
```  
  
### Instalando as dependências  
  
```  
npm install  
  
```  
  
### Executando o projeto  
  
```  
npm start  
  
```  
---------
