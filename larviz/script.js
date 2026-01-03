const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// product card
document.querySelectorAll('.product-card').forEach(card => {
    const minusBtn = card.querySelector('.minus');
    const plusBtn = card.querySelector('.plus');
    const qtyValue = card.querySelector('.qty-value');

    let quantity = 1;

    plusBtn.addEventListener('click', () => {
        quantity++;
        qtyValue.textContent = quantity;
    });

    minusBtn.addEventListener('click', () => {
        if (quantity >= 1) {
            quantity--;
            qtyValue.textContent = quantity;
        }
    });
});


