const fetch = require('node-fetch');

exports.getSearchController = (req, res, next) => {
    console.log(req.query);
    let key = "AIzaSyAGs0klP0BCIvNPyZ562G_RIEI4-wv2www"; // This is the key from Google Developer Console for custom search 
    let searchTerms = req.query.q; // This is the query keyword
    let count = req.query.num; // This is the number 
    let startIndex = req.query.start;
    // let language = req.query.lr;
    let safe = req.query.safe;
    let cx = req.query.cx;
    // let sort = req.query.sort;
    let filter = req.query.filter;
    let gl = req.query.gl;
    // let cr = req.query.cr;
    // let googlehost = req.query.googlehost;
    let disableCnTwTranslation = req.query.c2coff;
    // let hq = req.query.hq;
    let hl = req.query.hl;
    // let siteSearch = req.query.siteSearch;
    // let siteSearchFilter = req.query.siteSearchFilter;
    // let exactTerms = req.query.exactTerms;
    // let excludeTerms = req.query.excludeTerms;
    // let linkSite = req.query.linkSite;
    // let orTerms = req.query.orTerms;
    // let relatedSite = req.query.relatedSite;
    // let dateRestrict = req.query.dateRestrict;
    let lowRange = req.query.lowRange;
    let highRange = req.query.highRange;
    // let searchType = req.query.searchType;
    // let fileType = req.query.fileType;
    // let rights = req.query.rights;
    // let imgSize = req.query.imgSize;
    // let imgType = req.query.imgType;
    let imgColorType = req.query.imgColorType;
    // let imgDominantColor = req.query.imgDominantColor;
    let alt = req.query.alt;
    
    
    //OLD QUERIES START
    let device = req.query.device;
    let safesearch = req.query.safesearch;
    let locale = req.query.locale;
    let uiv = req.query.uiv;
    //OLD QUURIES END

    // fetch(`https://api.qwant.com/api/search/web?q=${q}&t=${t}&device=${device}&safesearch=${safesearch}&locale=${locale}&uiv=${uiv}`)
    // fetch(`https://www.googleapis.com/customsearch/v1?
    //     key=${key}
    //     q=${searchTerms}
    //     &num=${count}
    //     &start=${startIndex}
    //     // &lr=${language}
    //     &safe=${safe}
    //     &cx=${cx}
    //     // &sort=${sort}
    //     &filter=${filter}
    //     &gl=${gl}
    //     // &cr=${cr}
    //     // &googlehost=${googleHost}
    //     &c2coff=${disableCnTwTranslation}
    //     // &hq=${hq}
    //     &hl=${hl}
    //     // &siteSearch=${siteSearch}
    //     // &siteSearchFilter=${siteSearchFilter}
    //     // &exactTerms=${exactTerms}
    //     // &excludeTerms=${excludeTerms}
    //     // &linkSite=${linkSite}
    //     // &orTerms=${orTerms}
    //     // &relatedSite=${relatedSite}
    //     // &dateRestrict=${dateRestrict}
    //     &lowRange=${lowRange}
    //     &highRange=${highRange}
    //     // &searchType=${searchType}
    //     // &fileType=${fileType}
    //     // &rights=${rights}
    //     // &imgSize=${imgSize}
    //     // &imgType=${imgType}
    //     &imgColorType=${imgColorType}
    //     // &imgDominantColor=${imgDominantColor}
    //     &alt=${alt}`)
    let url = `https://www.googleapis.com/customsearch/v1?key=${key}&q=${searchTerms}&num=${count}&start=${startIndex}&safe=${safe}&cx=${cx}&filter=${filter}&gl=${gl}&c2coff=${disableCnTwTranslation}&hl=${hl}&lowRange=${lowRange}&highRange=${highRange}&imgColorType=${imgColorType}&alt=${alt}`;
    console.log({url})
    fetch(url)
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data && data.items && (data.items.length > 0)){
                let totalItems = data.items;
                res.render('user/result', { pageTitle: `${searchTerms} - WoWoW Search`, items: totalItems, searchInformation: data.searchInformation,nextPage: data.queries.nextPage, query:searchTerms })
            }else{
                console.log({data})
                res.send(data);
            }
            // else if (data.status !== 'success') {
            //     res.send(data.items);
            // }
            // else {
            //     let totalItems = data.data.result.items;
            //     res.render('user/result', { pageTitle: `${q} - WoWoW Search`, items: totalItems, qury: q })
            // }
        });


    // console.log(quary);
}
