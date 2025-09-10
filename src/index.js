import createItem  from './services/item.js';
import * as cartService from './services/cart.js';

async function calculateTotal(cart) {
    console.log(`Shopee Cart Total is:\n`);
    await cartService.calculateTotal(cart);
}

const cart = [];

console.log("Welcome to the Shopee Cart");

const item1 = await createItem("Item 1", 10, 2);
const item2 = await createItem("Item 2", 39.99, 3);


cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

await calculateTotal(cart);

await cartService.deleteItem(cart, item1.name);

await calculateTotal(cart);