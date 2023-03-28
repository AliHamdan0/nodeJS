const buffer = new Buffer.from('eeesonTylerisGorgeous');

console.log(buffer.toJSON());
console.log(buffer.toString());
buffer.write('AlisonTylerisGorgeous');
console.log(buffer.toString());
