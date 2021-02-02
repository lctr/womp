
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, (err) => {
  if (err) console.log(`Server-error! ${err}`);
  console.log('Server listening on port', port);
});

app.post('/updatelexicon', function (req, resp) {
  console.log(req.body);
  
  let entry = 'testing'; // { adhwan, pos, english, notes };
  let file = './adhwords.json';

  fs.readFile(file, (err, data) => {
    // if file doesn't exist, err code = "ENOENT"
    if (err && err.code === "ENOENT") {
      // create file and complain
      return fs.writeFile(file, JSON.stringify([entry], null, 2), error => console.error);
    } else if (err) {
      console.error(err);
    } else {
      // get JSON content
      try {
        // read, add, writes
        const fileData = JSON.parse(data);
        fileData.push(entry);
        console.log(`added entry: ${entry}`);
        return fs.writeFile(file, JSON.stringify(fileData), error => console.error);
      } catch (exception) {
        console.error(exception);
      }
    }
  });
});

app.listen()


// const http = require('http');
// const { parse } = require('querystring');

// const server = http.createServer((req, resp) => {
//   if (req.method === 'POST') {
//     collectReqData(req, res => {
//       console.log(res);
//       res.end(`Parsed data for ${res.fname}`);
//     });
//   }
// });

// function collectReqData(req, cb) {
//   const FORM_URLENCODED = 'application/x-www-form-urlencoded';

//   if (req.headers['content-type'] === FORM_URLENCODED) {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       cb(parse(body));
//     });
//   } else {
//     cb(null);
//   }
// }