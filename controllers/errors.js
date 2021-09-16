exports.notFound = (request, response) => {
    response.status(404).render('NotFound', { pageTitle: 'Not Found' });
};
