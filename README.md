# 🌾 PekalonganJS

![npm](https://img.shields.io/npm/v/pekalonganjs)
![license](https://img.shields.io/npm/l/pekalonganjs)
[![GitHub stars](https://img.shields.io/github/stars/amrunkhakim/pekalonganjs)](https://github.com/amrunkhakim/pekalonganjs/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amrunkhakim/pekalonganjs)](https://github.com/amrunkhakim/pekalonganjs/network)

> Framework Node.js nganggo logat Pekalongan sing lucu, enteng, lan api tenan.

## 🚀 Fitur
- `kanggo()` → Gawe rute (GET/POST)
- `sakdurunge()` → Tambah middleware global
- `nuduhake()` → Render tampilan HTML (EJS)
- `nyuwun.awak` → Parser body otomatis
- `setelan` → Konfigurasi global

## 🧪 Contoh
```js
const { kanggo, sakdurunge, ndas } = require('pekalonganjs');

sakdurunge((nyuwun, wangsul, lanjut) => {
  console.log('🔍 Ndelok nyuwun:', nyuwun.url);
  lanjut();
});

kanggo('GET', '/', (nyuwun, wangsul) => {
  wangsul.end('Sugeng rawuh, lur!');
});

ndas.listen(3000);
```

## 📦 Instalasi
```bash
npm install pekalonganjs
```

## ✨ CLI
```bash
npx pekalonganjs gawe namaprojekmu
npx pekalonganjs doc
```

---

## 🛠 Struktur Folder
```
pekalonganjs/
├── src/
│   ├── rute/dalan.js
│   ├── server/ndas.js
│   ├── util/nyuwunParser.js
│   ├── view/nuduhake.js
│   └── config/setelan.js
```

---

