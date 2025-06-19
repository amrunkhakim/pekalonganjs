const { kanggo, ndas, nuduhake, setelan } = require('../pekalonganjs/src/index');

// Rute GET: Menampilkan halaman utama
kanggo('GET', '/', (nyuwun, wangsul) => {
  nuduhake('beranda', { jeneng: 'Mas Karto', asal: 'Pekalongan' }, wangsul);
});

// Rute POST: Menerima data dari form/API
kanggo('POST', '/kirim', (nyuwun, wangsul) => {
  const isi = nyuwun.awak;
  wangsul.writeHead(200, { 'Content-Type': 'application/json' });
  wangsul.end(JSON.stringify({ status: 'ditampa', isi }));
});

// Menyalakan server
ndas.listen(setelan.port, () => {
  console.log(`⚡ Server ${setelan.namaApp} ngrungokke nang http://localhost:${setelan.port}`);
});
