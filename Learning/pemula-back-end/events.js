const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCofee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

// myEventEmitter.on('coffee-order', makeCofee);

// myEventEmitter.emit('coffee-order', { name: 'tubruk' });

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCofee(name);
  makeBill(price);
};

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
myEventEmitter.emit('coffee-order', { name: 'tubruk', price: 12000 });
