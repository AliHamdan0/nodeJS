const fs = require('node:fs/promises');

fs.readFile('./file.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const readFile = async () => {
  try {
    const data = await fs.readFile('./file.txt', 'utf-8');
    console.log('data is', data);
  } catch (e) {
    console.log(e);
  }
};
readFile();

// const FS = require('node:fs');

// fileText = FS.readFileSync('./file.txt', 'utf-8');
// console.log(fileText);

// fileAsynText = FS.readFile('./file.txt', 'utf-8', (error, data) => {
//   if (error) console.log(error);
//   else console.log(data);
// });
// console.log('last');

// FS.writeFileSync('./greet.txt', 'Hello there !');
// FS.writeFile('./greet.txt', 'Hello', { flag: 'a' }, (err) => {
//   if (err) console.log(err);
// });
