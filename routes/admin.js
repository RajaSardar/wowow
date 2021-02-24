const express = require('express');

const { veryfy } = require('../controllers/admin/verify')
const Router = express.Router();

// Router.get('/search')
Router.get('/v', veryfy);



module.exports = Router;