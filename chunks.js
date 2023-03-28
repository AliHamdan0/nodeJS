const fs = require('node:fs');
const zlib = require('node:zlib');
const readChunk = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

const writeChunk = fs.createWriteStream('./new.txt');
const gzip = zlib.createGzip();
// readChunk.on('data', (chunk) => {
//   console.log(chunk);
//   writeChunk.write(chunk);
// });

// readChunk.pipe(writeChunk);
readChunk.pipe(gzip).pipe(fs.WriteStream('./new.txt.gz'));
