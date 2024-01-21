const availableProducts = [
    {
        id: 1,
        name: 'Apple',
        price: 5
    },
    {
        id: 2,
        name: 'Orange',
        price: 6
    },
    {
        id: 3,
        name: 'Pomegranates',
        price: 2
    },
    {
        id: 4,
        name: 'Grapes',
        price: 4
    },
    {
        id: 5,
        name: 'Melon',
        price: 3
    },
];

const selectedProducts = []

function addToCart(id) {
    let selectedProduct = availableProducts.find(product => product.id === id);
    let quantity = prompt('Please enter the quantity:')

    console.log(quantity);

    selectedProducts.push({
        id: id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: parseInt(quantity)
    })
}

function fillProductContainer() {

    let innerHtml = '';
    const productContainer = document.getElementById('product-container');

    for (const product of availableProducts) {
        innerHtml += generateItemTemplate(product);
    }

    productContainer.innerHTML = innerHtml;
}

function generateItemTemplate(product) {
    return `
<div class="product-item">
    <span>${product.name}</span>
    <button class="product-cart-button" onclick="addToCart(${product.id})">Add to Cart</button>
</div>
`;
}
