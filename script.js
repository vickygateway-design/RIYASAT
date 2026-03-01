// script.js

// Product Data for Rajasthani Dresses
const products = [
    {
        id: 1,
        name: 'Bandhani Dress',
        price: 1500,
        description: 'Traditional Bandhani dress with vibrant patterns.',
        image: 'path/to/image1.jpg'
    },
    {
        id: 2,
        name: 'Leheriya Dress',
        price: 1800,
        description: 'Beautiful Leheriya design, perfect for festivities.',
        image: 'path/to/image2.jpg'
    },
    {
        id: 3,
        name: 'Mirror Work Dress',
        price: 2000,
        description: 'Elegant dress embellished with mirror work.',
        image: 'path/to/image3.jpg'
    }
];

// Shopping Cart Functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart.`);
    } else {
        console.log('Product not found.');
    }
}

function viewCart() {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    console.log('Items in your cart:');
    cart.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
    });
}

function checkout() {
    if (cart.length === 0) {
        console.log('Your cart is empty. Cannot checkout.');
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Your total is $${total}. Thank you for your purchase!`);
    cart = []; // clear the cart after checkout
}