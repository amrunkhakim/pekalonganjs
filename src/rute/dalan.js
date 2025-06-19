const dalan = [];
const _daftarMiddleware = [];

function kanggo(cara, rute, tumindak) {
  dalan.push({ cara, rute, tumindak });
}

function goleki(cara, rute) {
  return dalan.find(d => d.cara === cara && d.rute === rute);
}

function sakdurunge(mw) {
  _daftarMiddleware.push(mw);
}

module.exports = { kanggo, goleki, sakdurunge, _daftarMiddleware };