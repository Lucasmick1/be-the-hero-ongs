const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * rota / recursos 'localhost:3333 <= rota recurso => /users
 * 
 * métodos HTTP :
 * GET : Serve para buscar uma informação do back-end;
 * POST : Serve para criar uma informação no back-end;
 * PUT : Para alterar uma informação no back-end;
 * DELETE : Para deletar uma informação no back-end.
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Parms: Parâmetros nomeados enviados na rota após o "?" serve para : filtros e paginação
  * Route Parms: Parâmtros utilizados para identificar recursos;
  * Resquest Body :  Corpo da requisição, utilizado para criar ou alterar informações.
 */

 /** Diferenças de bancos de dados :
  * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  * 
*/
/** Para fazer a comunicação no banco de dados
 * Driver : SELECT * FROM users
 * Query Builder : (utiliza JS) table('users').select('*').where()
 */



