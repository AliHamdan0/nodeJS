const EventEmitter = require('node:events');
class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.order = 0;
  }
  sendOrder = () => {
    this.order += 1;
    this.emit('order');
  };
  displayOrder = () => {
    console.log('display order');
  };
}

module.exports = PizzaShop;
