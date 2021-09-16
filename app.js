const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFound = require('./routes/404');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', 'views/');

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);

app.use(shopRoutes);

app.use(notFound);

app.listen(3000, () => {
    console.log('Now listening on port 3000');
});
