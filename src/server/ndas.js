const http = require('http');
const { goleki, _daftarMiddleware } = require('../rute/dalan');
const nyuwunParser = require('../util/nyuwunParser');

const ndas = http.createServer(async (nyuwun, wangsul) => {
  await nyuwunParser(nyuwun);

  // Eksekusi middleware secara berurutan
  let posisi = 0;
  function lanjut() {
    const mw = _daftarMiddleware[posisi++];
    if (mw) mw(nyuwun, wangsul, lanjut);
    else prosesRute();
  }

  function prosesRute() {
    const dalane = goleki(nyuwun.method, nyuwun.url);
    if (dalane) {
      dalane.tumindak(nyuwun, wangsul);
    } else {
      wangsul.writeHead(404, { 'Content-Type': 'text/plain' });
      wangsul.end('404: Ora Ketemu, lur!');
    }
  }

  lanjut();
});

module.exports = ndas;