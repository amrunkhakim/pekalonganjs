// File: pekalonganjs/src/config/setelan.js

module.exports = {
  port: 3000,
  namaApp: 'PekalonganJS',
  versi: '1.0.0'
};

// File: contoh-proyek/index.js

const { kanggo, ndas, nuduhake, setelan } = require('../pekalonganjs/src/index');

kanggo('GET', '/', (nyuwun, wangsul) => {
  nuduhake('beranda', { jeneng: 'Mas Karto', asal: 'Pekalongan' }, wangsul);
});

kanggo('POST', '/kirim', (nyuwun, wangsul) => {
  const isi = nyuwun.awak;
  wangsul.writeHead(200, { 'Content-Type': 'application/json' });
  wangsul.end(JSON.stringify({ status: 'ditampa', isi }));
});

ndas.listen(setelan.port, () => {
  console.log(`⚡ Server ${setelan.namaApp} ngrungokke nang http://localhost:${setelan.port}`);
});