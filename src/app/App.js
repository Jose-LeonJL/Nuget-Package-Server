const Express = require("express");
const Morgan = require('morgan');

//Rutas
const RUser = require('../routes/Users.Routes');
const RPackage = require('../routes/Packages.Routes');
const Database = require('../database/DataBase');

//App
const App = Express();

//Configuracione
App.use(Morgan('dev'));
App.use('/Users',RUser);
App.use('/Packages',RPackage);
App.use(Express.json());

//Exportacion
module.exports= {App};