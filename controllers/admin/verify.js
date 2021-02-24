const { response } = require('express');
const fetch = require('node-fetch');

exports.veryfy = (req, res, next) => {
    fetch('https://www.qwant.com/?q=abc&t=web')
        .catch(err => res.send(err))
        .then(response => res.send(response))
}