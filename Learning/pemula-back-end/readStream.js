const fs = require('fs');
const { resolve } = require('path');

const readebleStream = fs.createReadStream(resolve(__dirname, 'article.txt'), {
  highWaterMark: 10,
});

readebleStream.on('readable', () => {
  try {
    process.stdout.write(`[${readebleStream.read()}]`);
  } catch (error) {}
});

readebleStream.on('end', () => {
  console.log('Done');
});
