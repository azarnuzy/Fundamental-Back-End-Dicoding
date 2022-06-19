const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
  highWaterMark: 15,
});

const writeTableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
  try {
    writeTableStream.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on('end', () => {
  writeTableStream.end('End\n');
});
