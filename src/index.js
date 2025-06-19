const { kanggo, goleki, sakdurunge, _daftarMiddleware } = require('./rute/dalan');
const ndas = require('./server/ndas');
const nyuwunParser = require('./util/nyuwunParser');
const nuduhake = require('./view/nuduhake');
const setelan = require('./config/setelan');

module.exports = {
  kanggo,
  goleki,
  sakdurunge,
  ndas,
  nyuwunParser,
  nuduhake,
  setelan,
  _daftarMiddleware // untuk testing/internal
};