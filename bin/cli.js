#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, cmd, nama] = process.argv;

if (cmd === 'gawe' && nama) {
  const target = path.resolve(process.cwd(), nama);
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
    fs.writeFileSync(path.join(target, 'index.js'), '// Project gawean anyar nganggo PekalonganJS');
    console.log(`📦 Proyek '${nama}' wis digawe, lur!`);
  } else {
    console.log(`⚠️ Folder '${nama}' wes ana.`);
  }
} else {
  console.log('📘 PekalonganJS CLI');
  console.log('🔧 Gunakake: pekalonganjs gawe namaprojekmu');
}
