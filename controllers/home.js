exports.getIndexController = (req, res, next) => {
    res.render('user/home', { pageTitle: "WoWoW : Search Engine" })
}