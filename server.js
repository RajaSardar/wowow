const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(userRoute);

app.listen(5000);
