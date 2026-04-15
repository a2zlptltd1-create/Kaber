let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.textContent = cart.length;
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const product = e.target.dataset.product;
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Added to cart!');
  }
});

updateCartCount();