const express = require('express');

const { getIndexController } = require('../controllers/home');
const { getSearchController } = require('../controllers/result');

const Router = express.Router();

Router.get('/', getIndexController);
Router.get('/search', getSearchController);



module.exports = Router;