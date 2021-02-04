const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adhwords = require('./adhwords');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('data', path.join(__dirname, 'views'));
app.set('json spaces', 2);
app.get('/', (req, resp) => { resp.render('index'); });
app.get('/readlexicon', function (req, resp) { 
  let api = adhwords.loadAdhwords();
  api.then(dict => JSON.parse(dict))
    // .then(obj => JSON.stringify(obj, null, 2))
    .then(obj => resp.json(obj))
    .catch(console.error);
});

app.listen(port, (err) => {
  if (err) console.log(`Server-error! ${err}`);
  console.log('Server listening on port', port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/updatelexicon', function (req, resp) {
  adhwords.saveAdhwords(req, resp);
  resp.redirect('/');
});

