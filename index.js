const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
// const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


const port = 5000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
