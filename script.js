const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 200, image: "https://via.placeholder.com/200x150?text=Smartphone" },
  { id: 2, name: "T-Shirt", category: "fashion", price: 30, image: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { id: 3, name: "Novel Book", category: "books", price: 15, image: "https://via.placeholder.com/200x150?text=Book" },
  { id: 4, name: "Laptop", category: "electronics", price: 800, image: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 5, name: "Jeans", category: "fashion", price: 45, image: "https://via.placeholder.com/200x150?text=Jeans" },
  { id: 6, name: "Biography Book", category: "books", price: 25, image: "https://via.placeholder.com/200x150?text=Biography" }
];

const productContainer = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sort');

function displayProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
    productContainer.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sortOption = sortSelect.value;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortOption === 'low-to-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high-to-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortSelect.addEventListener('change', filterAndSort);

// Initial load
displayProducts(products);
