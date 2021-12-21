# Boas vindas ao projeto Species-API

###  Comentários sobre o projeto

Durante a época de escola uma das minhas matérias favoritas era a biologia, e dentre os assuntos que mais gostava o estudo dos reinos biológicos (animal, vegetal, fungi, protista e monera) era algo que despertava muito minha curiosidade, tanto que chegava a passar horas e horas em livros lendo sobre o assunto e aprendendo.

Uma parte que achava bastante interessante era o padrão para nomear um ser vivo pertencente a um reino, a forma com que os taxonomistas organizaram isso, após o módulo de back end no curso da Trybe, curti bastante a atuação dessa área e decidi fazer uma pequena contribuição dos meus conhecimentos atuais com esses conhecimentos da infância e assim nasceu a ideia desse projeto.

Atualmente o projeto está em construção, mas está sendo uma experiência enriquecedora para mim pois esse está sendo desenvolvendo com TDD 'Test Driven Development' com Jest, ao mesmo tempo que uso e me aprofundo em tecnologias como nodejs, mongodb além de multer, bcrypt e jwt.

possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

### O que é o Species Api?

Uma aplicação Back end onde é possível registrar, listar e editar a taxonomia (classificar espécies) de seres vivos, também é possível adicionar imagem para representar cada espécie

### Deploy
Acesse https://specieapi.herokuapp.com/ e veja a API rodando em tempo real em sua máquina.
*obs: inicialmente cadastrei apenas 3 espécies no banco de dados, então a API só irá retornar essas espécies*

---

# Sumário

- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Requisitos técnicos](#requisitos-técnicos)
- [Testes](#testes)
- [Instalação e uso](#instalação-e-uso)

# Tecnologias envolvidas:
 - Javascript
 - NodeJs
 - MongoDB
 - Jest
 - Json Web Token (jwt)
 - Multer

# Funcionalidades

- Cadastrar uma nova espécie
- Adicionar imagem da nova espécie
- Listar todas as espécies
- Listar apenas uma espécie
- Editar uma espécie

*Obs: Não achei que fazia sentido criar um método para deletar uma espécie, pois mesmo que sua espécie tenha sido extinta ainda seria válido deixar seu registro e no caso de erro durante o cadastro de uma espécie é possível editar.*

# Requisitos técnicos

### 1 - A aplicação tem o endpoint `GET /specie`


Esse endpoint é responsável pelo cadastro de uma nova espécie
Os campos `reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome` são esperados na requisição

*Exemplo de requisição*

![1 - registrar](https://user-images.githubusercontent.com/72472530/146537400-f7c0a6be-3e70-4e52-b4e7-67449073ed95.png)


Será validado que os campos `reino, filo, classe, ordem,	familia, genero, especie e nome` são **obrigatórios**


*No exemplo abaixo fiz a requisição sem o campo "name", porém o mesmo erro iria se repetir se algum dos campos obrigatórios não fossem enviados na requisição*


![1 - validação](https://user-images.githubusercontent.com/72472530/146537890-201d6671-2b5f-4f61-bee3-908be9299748.png)


### 2 - A aplicação tem o endpoint `PUT /specie/:id/image`
Esse endpoint é responsável por adicionar uma nova imagem a uma espécie previamente cadastrada.

O campo **id** deve corresponder ao id da espécie cadastrada

*exemplo de requisição*

![2 - adicionar imagem](https://user-images.githubusercontent.com/72472530/146543476-9a5c274d-b9b3-461d-af0b-e7e302d47388.png)

Ao clicar na url a imagem será carregada

![2 - acesso imagem](https://user-images.githubusercontent.com/72472530/146543531-4ccbf177-b53d-45f8-a0fc-41b61ec829a7.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![2 - id invalido](https://user-images.githubusercontent.com/72472530/146543714-ec9d0b08-dc4e-4e27-aa40-4258b672df7b.png)

### 3 - A aplicação tem o endpoint `GET /specie`

Esse endpoint é responsável por listar todas as espécies cadastradas no banco de dados.

*exemplo de requisição*

![3 - listar todos](https://user-images.githubusercontent.com/72472530/146543826-74301ea2-62c5-45e8-a3f3-4b954db59ed7.png)

### 4 - A aplicação tem o endpoint `GET /specie/:id`

Esse endpoint é responsável por listar uma espécie através do **id**

*exemplo de requisição*

![4 - listar um](https://user-images.githubusercontent.com/72472530/146543857-bd80baec-4dad-422c-add9-46fb6febb8b3.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![4 - validacao id](https://user-images.githubusercontent.com/72472530/146544054-7d50d3a6-aeb2-4339-a287-4fe378e3444d.png)

### 5 - A aplicação tem o endpoint `PUT /specie/:id`

Esse endpoint é responsável por editar dados de uma espécie previamente cadastrada

Nessa requisição devem ser enviados dados através do **id** que corresponde a uma espécie preciamente cadastrada, e no corpo da requisição devem ser enviados o dado a ser alterado

*exemplo de requisição*

![5 - editar](https://user-images.githubusercontent.com/72472530/146544115-40d75df3-baec-4bde-9423-b26b454731c2.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![5 - validação id](https://user-images.githubusercontent.com/72472530/146544151-d02617ed-84f1-49d3-b6b0-689c0d298cb7.png)

Será validado que os campos `reino, filo, classe, ordem,	familia, genero, especie e nome` são **obrigatórios**

![5 - validação campos](https://user-images.githubusercontent.com/72472530/146544338-469268a5-c068-4662-89db-a56a1c04924a.png)

# Testes

É possível abrir o terminal dentro da aplicação e digitar o comando `npm test specie.test.js` ou `npm test` para testar a aplicação

![2021-12-16-17-46-39](https://user-images.githubusercontent.com/72472530/146544916-712b61c9-0195-4acc-9320-f9d22a304975.gif)

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
