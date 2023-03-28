function HighOrderFunction(callback) {
  const name = 'ali';
  callback(name);
}

function sayName(name) {
  console.log(name);
}
HighOrderFunction(sayName);
