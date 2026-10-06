const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(process.cwd(), 'src');

function findFiles(dir, exts) {
  let res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) res = res.concat(findFiles(full, exts));
    else if (exts.some(ext => entry.name.endsWith(ext))) res.push(full);
  }
  return res;
}

const files = findFiles(srcDir, ['.js', '.jsx']);
const occurrences = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    // Check for $ followed by number, or price templates with $
    if (/\$[0-9]/.test(l) || />\s*\$[0-9]/.test(l) || /\$\{\s*.*price/i.test(l) || (/>\s*.*\$[0-9]/i.test(l)) || /\$\s*\{.*price/i.test(l)) {
      occurrences.push({ file: path.relative(process.cwd(), f), line: idx + 1, text: l.trim() });
    }
  });
});

console.log('Total remaining price occurrences with dollar:', occurrences.length);
occurrences.forEach(o => console.log(o.file + ':' + o.line + ' -> ' + o.text));
