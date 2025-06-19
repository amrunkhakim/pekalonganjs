// File: pekalonganjs/src/util/nyuwunParser.js

module.exports = function nyuwunParser(nyuwun) {
  return new Promise((res) => {
    let awak = '';
    nyuwun.on('data', potong => awak += potong);
    nyuwun.on('end', () => {
      try {
        nyuwun.awak = JSON.parse(awak);
      } catch {
        nyuwun.awak = awak;
      }
      res();
    });
  });
};
