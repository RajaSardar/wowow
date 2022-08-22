const fetch = require('node-fetch');

exports.getSearchController = (req, res, next) => {
    // let quary = req.query
    let q = req.query.q;
    // console.log({ q });
    let t = req.query.t;
    let device = req.query.device;
    let safesearch = req.query.safesearch;
    let locale = req.query.locale;
    let uiv = req.query.uiv;

    fetch(`https://api.qwant.com/v3/search/web?q=${q}&count=10&locale=de_DE&offset=0&device=${device}&safesearch=${safesearch}`)
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.status !== 'success') {
                res.send(data);
            }
            else {
                let totalItems = data.data.result.items;
                res.render('user/result', { pageTitle: `${q} - WoWoW Search`, items: totalItems, qury: q })
            }
        });


    // console.log(quary);
}
