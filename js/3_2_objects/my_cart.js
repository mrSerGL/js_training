// =====  самостоятельній повтор решения задачи Репеті

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        console.log(this.items);
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = { ...product, quantity: 1 };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];
            if (productName.name === item.name) {
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;
        for (const { price, quantity } of items) {
            // const { price, quantity} = item;
            total += price * quantity;
            // total += item.price * item.quantity;
        }
        return total;
    },
    increaseQuantity(productName) {
        const { items } = this;
        for (const item of items) {
            if (item.name === productName.name) {
                item.quantity += 1;
            }
        }
    },
    decreaseQuantity(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];
            
            if (item.name === productName.name){
                item.quantity -= 1; 
            }

            if (item.quantity <= 0) {
                items.splice(i, 1);
            }
        }

    },
};
console.log('=== добавляем товар =====');

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.items);
console.log('Total:', cart.countTotalPrice());

console.log('=== удаляем товар =====');

cart.remove({ name: '🍋', price: 60 });
// cart.remove({ name: '🍓', price: 110 });
// cart.remove({ name: '🍎', price: 50 });

// cart.clear();

console.table(cart.items);
console.log('Total:', cart.countTotalPrice());

console.log('=== увеличиванем к-во товара =====');

cart.increaseQuantity({ name: '🍓', price: 110 });
console.table(cart.items);
console.log('Total:', cart.countTotalPrice());

console.log('=== уменьшаем к-во товара =====');

cart.decreaseQuantity({ name: '🍓', price: 110 });
// cart.decreaseQuantity({ name: '🍋', price: 60 });
cart.decreaseQuantity({ name: '🍎', price: 50 });
cart.decreaseQuantity({ name: '🍎', price: 50 });

console.table(cart.items);
console.log('Total:', cart.countTotalPrice());
