const express = require('express');
const path = require('path');
const port = 3000;
const skillsRouter = require('./routes/skills')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', skillsRouter)

app.listen(port)


