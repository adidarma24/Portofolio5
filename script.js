const products = [
    { id: 1, name: "Laptop", price: 10000000, description: "Laptop dengan performa tinggi untuk kerja dan gaming.", image: "img/img1.png", category: "Elektronik" },
    { id: 2, name: "Smartphone", price: 5000000, description: "Smartphone dengan kamera canggih dan baterai tahan lama.", image: "img/img2.png", category: "Elektronik" },
    { id: 3, name: "Headphone", price: 1000000, description: "Headphone berkualitas tinggi dengan suara jernih.", image: "img/img3.png", category: "Aksesoris" }
];

const productContainer = document.getElementById("product-list");
const filterSelect = document.getElementById("filter-category");

function displayProducts(category = "All") {
    productContainer.innerHTML = "";
    
    const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Rp ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

displayProducts();

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} telah ditambahkan ke keranjang!`);
}

filterSelect.addEventListener("change", (event) => {
    displayProducts(event.target.value);
});
