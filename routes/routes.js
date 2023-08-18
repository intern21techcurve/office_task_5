const controller = require('../controller/clr');
var express = require('express');
const routes = express.Router();


var bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());


routes.post('/addcontact', controller.addcontact);


module.exports = routes