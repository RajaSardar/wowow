const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const fs = require('fs');

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(helmet());

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(userRoute);

app.listen(process.env.PORT || 5000, function () {
    console.log("Express is working on port ");
});
