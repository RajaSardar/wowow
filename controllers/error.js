exports.get404Error = (req, res, next) => {
    res.status(404).render('error', { pageTitle: "Page not found" }) // 404 error page
}