
async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function deleteItemByIndex(userCart, index) {
    const deleteIndex = index -1;
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, index) {
    const deleteIndex = index -1;
    if (index > 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function calculateTotal(userCart) {
    console.log(`\nShopee Cart Total is:`);
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

async function displayCart(userCart) {
    console.log(`\nShopee Cart list is:`);
    userCart.forEach((item, index) => {
        console.log(`${index + 1} | (${item.quantity}) ${item.name} - $${item.price} - subtotal: $${item.subtotal()}`);
    });;
}

export { addItem, deleteItem, deleteItemByIndex, removeItem, displayCart, calculateTotal };