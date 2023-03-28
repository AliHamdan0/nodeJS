// const eventEmitter = require('node:events');

// const emiter = new eventEmitter();

// emiter.on('calling', (period, priority) =>
//   console.log(`calling received for ${period} and it is ${priority}`)
// );

// emiter.on('calling', (p) => console.log(`second listener for the same ${p}`));

// emiter.emit('calling', 'long', 'important');

const PizzaShop = require('./pizza-shop');

const myPizza = new PizzaShop();
myPizza.on('order', () => {
  //always run listeners before triggers
  console.log('order received');
});

myPizza.displayOrder();
myPizza.sendOrder();
