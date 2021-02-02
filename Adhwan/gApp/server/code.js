
function doGet(e) {
  if (e.queryString) { 
    let json = wordsApi();
    return ContentService.createTextOutput(json)
        .setMimeType(ContentService.MimeType.JSON);
  } else { 
    return HtmlService.createTemplateFromFile('client/index')
      .evaluate()
      .setTitle('Adhwan');
  } 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile('client/' + filename)
  .getContent();
}

function getWords() {
  let id = '1M8G1znbKAb9bafVq6reZ8jde3Fcm5RjUsPUJtaOd0CE';
  return SpreadsheetApp.openById(id)
    .getSheetByName('Words')
    .getDataRange()
    .getDisplayValues();
}

function wordsApi() {
  let [fields, ...entries] = getWords();
  let len = entries.length,
    cols = fields.length;
  let words = [];
  let i = 0;
  fields.forEach(x => x.toLowerCase().trim().replace(/s/g, '_'));
  while (i < len) {
    let word = {};
    fields.forEach((x, j) => word[x] = entries[i][j]);
    words.push(word);
    i++;
  }
  let json = JSON.stringify(words, null, 2);
  return json; 
}

