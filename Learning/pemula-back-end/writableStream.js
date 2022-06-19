const fs = require('fs');
const writetableStream = fs.createWriteStream('output.txt');

writetableStream.write('Ini merupakan teks baris pertama\n');
writetableStream.write('Ini merupakan teks baris kedua\n');
writetableStream.end('Akhi');
