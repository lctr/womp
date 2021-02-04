
const fs = require('fs');
const file = './adhwords.json';
const when = () => new Date().toUTCString();
const normStr = (str = '') => str.trim().toLowerCase();

function adhEntry(req, resp) {
  let body = req.body
  console.log('Adhwan:', req.body.adhwan);
  console.log('Part of Speech:', req.body.pos);
  console.log('English:', req.body.english);

  let { adhwan, pos, english, notes } = req.body,
    valid = adhwan && adhwan.length > 0 &&
      pos && pos.length > 0 && english && english.length > 0;

  let entry;
  if (!valid) {
    console.log('Invalid form input!');
  } else {
    entry = {
      adhwan: normStr(adhwan),
      pos: normStr(pos),
      english: normStr(english),
      notes
    };
  }
  return { valid, entry };
};

function initialize(baseEntry) {
  const { entry, valid } = baseEntry;
  let api = {
    description: 'Adhwords -- a simple adhwan dictionary',
    wordCount: 0,
    history: {
      created: when(),
      modified: valid ? when() : '',
      recentAddition: valid ? entry : {}
    },
    lexicon: valid ? [entry] : []
  };
  return JSON.stringify(api, null, 2);
};

function updateAdhwords(data, input) {
  let words, word = input.entry; 
  // check that the file isn't corrupt
  try {
    words = JSON.parse(data);
  } catch (e) {
    console.log('Error parsing adhwords JSON file!', e);
    console.log('Womp, generating a new base file');
    words = initialize();
  } finally {
    words.history.modified = when(); 
    words.history.recentAddition = word;
    words.lexicon.push(word);
    words.wordCount += 1;
    return JSON.stringify(words, null, 2);
  }
}

function saveAdhwords(req, resp) {
  let input = adhEntry(req, resp);
  if (!input.valid) return; 

  fs.readFile(file, (err, data) => {
    // if file doesn't exist, recreate
    if (err && err.code === "ENOENT") {
      let api = initialize(input);
      return fs.writeFile(file, api, error => console.error);
    } else if (err) {
      console.error(err);
    } else {
      try {
        let update = updateAdhwords(data, input);
        return fs.writeFile(file, update, msg => console.error);
      } catch (e) {
        console.error(e);
      }
    }
  });
}

module.exports = { saveAdhwords };

