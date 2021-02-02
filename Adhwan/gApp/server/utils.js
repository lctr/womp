// TODO: move over to script.html file 
function ipa(str = '') {
  let word = str.trim().toLowerCase();
  return word.replace(/mg|((m)(?=[cg]))/g, '\u0303ɰ\u0303')
    .replace(/([aeouy])in([^aeiouwy])/g, '$1nh$2')
    .replace(/nh/g, '\u0303ȷ\u0303')
    .replace(/cg/g, 'ç')
    .replace(/ch/g, 'x')
    .replace(/c/g, 'k')
    .replace(/dg/g, 'ɟ͡ʝ')
    .replace(/dh/g, 'ð')
    .replace(/lg/g, 'ɮ')
    .replace(/lh/g, 'ɬ')
    .replace(/ph/g, 'ɸ')
    .replace(/rg/g, 'ʐ')
    .replace(/rh/g, 'ʂ')
    .replace(/tg/g, 'c͡ç')
    .replace(/th/g, 'θ')
    .replace(/bh/g, 'β')
    .replace(/gh/g, 'j')
    .replace(/sh/g, 'S')
    .replace(/sg/g, 'X')
    .replace(/u/g, 'ʊ')
    .replace(/w/g, 'u')
    .replace(/(u)(?=[aeioʊy])/g, 'w')
    .replace(/(i)(?=[aeouʊy])/g, 'j')
    .replace(/([aeouy])i([^aeouy])/g, '$1j$2')
    .replace(/([aeouy])w([^aeouy])/g, '$1w$2')
    .replace(/r/g, 'ɾ')
    .replace(/y/g, 'ɪ')
    .replace(/g$/g, 'ɣ')
    .replace(/mh/g, 'w')
    .replace(/(n)(?=[ɟ|c|ʐ])/g, 'j̃')
    .replace(/ï/g, 'i(j)')
    .replace(/ẅ/g, 'u(w)')
    .replace(/([aeioʊuɪ])Sj/g, '$1ɕɕj')
    .replace(/^S([aeioʊuɪ])/g, 'ˈ$1')
    .replace(/a\s|a$/g, 'ɐ');
}

