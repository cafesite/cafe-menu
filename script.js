// Get existing cart data or create a new empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to the cart
function addToCart(itemName, price) {
  // Add the item to the cart array
  cart.push({ name: itemName, price: price });

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show confirmation message
  alert(`${itemName} has been added to your cart!`);
}
