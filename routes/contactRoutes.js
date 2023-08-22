const controllerContact = require('../controller/controllerContact');
var express = require('express');
const Routes = express.Router();


var bodyParser = require("body-parser");
Routes.use(bodyParser.urlencoded({ extended: true }));
Routes.use(bodyParser.json());


Routes.post('/addcontact', controllerContact.addcontact);
Routes.get('/getallconnections',controllerContact.getAllConnection )



module.exports = Routes