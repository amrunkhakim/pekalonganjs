const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

function nuduhake(jenengView, data, wangsul) {
  const filePath = path.join(__dirname, '../../views', jenengView + '.ejs');
  const template = fs.readFileSync(filePath, 'utf-8');
  const html = ejs.render(template, data);
  wangsul.writeHead(200, { 'Content-Type': 'text/html' });
  wangsul.end(html);
}

module.exports = nuduhake;