const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adhwords = require('./adhwords');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, resp) => { resp.render('index'); });

app.listen(port, (err) => {
  if (err) console.log(`Server-error! ${err}`);
  console.log('Server listening on port', port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/updatelexicon', function (req, resp) {
  adhwords.saveAdhwords(req, resp);
  resp.redirect('/');
});

