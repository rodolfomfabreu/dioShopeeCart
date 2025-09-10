import createItem  from './services/item.js';
import * as cartService from './services/cart.js';

const cart = [];

console.log("Welcome to the Shopee Cart\n");

const item1 = await createItem("Item 1", 10, 2);
const item2 = await createItem("Item 2", 39.99, 3);


cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);

await cartService.deleteItemByIndex(cart, 1);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);

await cartService.deleteItem(cart, item2.name);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);

await cartService.displayCart(cart);

cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);