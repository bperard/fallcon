'use strict';

class Queue {
  constructor() {
    this.inventory = {

    };
  }

  read(product) {
    const key = product.productId;
    const queueProduct = this.inventory[key];

    if(!queueProduct) {
      console.log('Product not found');
    }

    return queueProduct;
  }

  store(product) {
    const key = product.productId;
    this.inventory[key] = product;

    console.log(`${product.productName} was stored.`);
  }

  delete(product) {
    const key = product.productId;
    delete this.inventory[key];

    console.log(`${product.productName} was deleted.`);
  }
}

module.exports = Queue;