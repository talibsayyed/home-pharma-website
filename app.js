/* Home Pharma - JavaScript Functionality */

// Products Data from JSON
const products = [
  {
    id: 1,
    name: "Dolo 650",
    price: 25,
    category: "Tablets",
    usage: "Fever and pain relief",
    dosage: "1-2 tablets every 4-6 hours",
    icon: "💊"
  },
  {
    id: 2,
    name: "Crocin Advance",
    price: 30,
    category: "Tablets", 
    usage: "Fast fever and headache relief",
    dosage: "1 tablet every 4-6 hours",
    icon: "💊"
  },
  {
    id: 3,
    name: "Vicks VapoRub",
    price: 85,
    category: "First-aid",
    usage: "Cold and cough relief",
    dosage: "Apply on chest and throat",
    icon: "🧴"
  },
  {
    id: 4,
    name: "Cetirizine 10mg",
    price: 15,
    category: "Tablets",
    usage: "Allergy relief",
    dosage: "1 tablet daily",
    icon: "💊"
  },
  {
    id: 5,
    name: "Cough Syrup",
    price: 45,
    category: "Syrups",
    usage: "Dry and wet cough relief",
    dosage: "2 tsp 3 times daily",
    icon: "🍯"
  },
  {
    id: 6,
    name: "Multivitamin",
    price: 120,
    category: "Vitamins",
    usage: "Daily nutritional supplement",
    dosage: "1 tablet daily after meal",
    icon: "💎"
  },
  {
    id: 7,
    name: "Digene Gel",
    price: 35,
    category: "Tablets",
    usage: "Acidity and gas relief",
    dosage: "1-2 tsp after meals",
    icon: "🧴"
  },
  {
    id: 8,
    name: "Betadine Solution",
    price: 55,
    category: "First-aid",
    usage: "Antiseptic for cuts and wounds",
    dosage: "Apply on affected area",
    icon: "🩹"
  },
  {
    id: 9,
    name: "Iron Tablets",
    price: 40,
    category: "Vitamins",
    usage: "Iron deficiency supplement",
    dosage: "1 tablet daily",
    icon: "💎"
  },
  {
    id: 10,
    name: "Paracetamol Syrup",
    price: 35,
    category: "Syrups",
    usage: "Fever reducer for children",
    dosage: "5-10ml as per age",
    icon: "🍯"
  },
  {
    id: 11,
    name: "Disprin",
    price: 20,
    category: "Tablets",
    usage: "Pain and fever relief",
    dosage: "1-2 tablets in water",
    icon: "💊"
  },
  {
    id: 12,
    name: "Band-Aid",
    price: 65,
    category: "First-aid",
    usage: "Wound protection",
    dosage: "Apply on clean wound",
    icon: "🩹"
  },
  {
    id: 13,
    name: "Vitamin C",
    price: 80,
    category: "Vitamins",
    usage: "Immunity booster",
    dosage: "1 tablet daily",
    icon: "💎"
  },
  {
    id: 14,
    name: "Antacid Syrup",
    price: 55,
    category: "Syrups",
    usage: "Stomach acidity relief",
    dosage: "2 tsp after meals",
    icon: "🍯"
  },
  {
    id: 15,
    name: "Iodex",
    price: 45,
    category: "First-aid",
    usage: "Muscle pain relief",
    dosage: "Apply and massage gently",
    icon: "🧴"
  },
  {
    id: 16,
    name: "Combiflam",
    price: 28,
    category: "Tablets",
    usage: "Pain and inflammation relief",
    dosage: "1 tablet twice daily",
    icon: "💊"
  },
  {
    id: 17,
    name: "Calcium Tablets",
    price: 90,
    category: "Vitamins",
    usage: "Bone health supplement",
    dosage: "1 tablet daily with milk",
    icon: "💎"
  },
  {
    id: 18,
    name: "Cough Drops",
    price: 25,
    category: "First-aid",
    usage: "Throat soothing",
    dosage: "1-2 drops as needed",
    icon: "🍬"
  }
];

const categories = ["All", "Tablets", "Syrups", "Vitamins", "First-aid"];

// State Management
let cart = [];
let filteredProducts = [...products];

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const cartContent = document.getElementById("cart-content");
const cartCount = document.getElementById("cart-count");
const floatingCartCount = document.getElementById("floating-cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutForm = document.getElementById("checkout-form");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const toast = document.getElementById("toast");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const successModal = document.getElementById("success-modal");
const modalOverlay = document.getElementById("modal-overlay");
const orderSummary = document.getElementById("order-summary");
const summaryItems = document.getElementById("summary-items");
const summaryTotal = document.getElementById("summary-total");

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeCategories();
  loadCartFromStorage();
  renderProducts();
  updateCartUI();
  updateOrderSummary();
  setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
  // Navbar scroll effect
  window.addEventListener("scroll", handleScroll);

  // Mobile menu toggle
  hamburger.addEventListener("click", toggleMobileMenu);

  // Navigation links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", handleNavClick);
  });

  // Search and filter
  searchInput.addEventListener("input", handleSearch);
  categorySelect.addEventListener("change", handleCategoryFilter);

  // Form submission
  checkoutForm.addEventListener("submit", handleCheckout);

  // Close menus when clicking outside
  document.addEventListener("click", handleOutsideClick);
}

// Navigation Functions
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function toggleMobileMenu() {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
}

function handleNavClick(e) {
  const href = e.target.getAttribute("href");
  if (href && href.startsWith("#") && href !== "#") {
    e.preventDefault();
    const id = href.substring(1);
    scrollToSection(id);
  }
}

function handleOutsideClick(e) {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
    
    const offsetTop = section.offsetTop - 70; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
    
    if (sectionId === "contact") {
      setTimeout(() => {
        const nameInput = document.getElementById("name");
        if (nameInput) nameInput.focus();
      }, 1000);
    }
  }
}

// Categories and Product Rendering
function initializeCategories() {
  categorySelect.innerHTML = categories
    .map(cat => `<option value="${cat}">${cat}</option>`)
    .join("");
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;
  
  filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(query) || 
                         product.usage.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  renderProducts();
}

function handleCategoryFilter() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;
  
  filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(query) || 
                         product.usage.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  renderProducts();
}

function renderProducts() {
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-secondary);">
        <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
        <h3>No medicines found</h3>
        <p>Try adjusting your search criteria or browse all categories.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = "";
  filteredProducts.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="product-image">
        ${product.icon}
      </div>
      <div class="product-info">
        <div>
          <h3 class="product-name">${product.name}</h3>
          <span class="product-category">${product.category}</span>
          <p class="product-usage">${product.usage}</p>
          <div class="product-dosage">
            <strong>Dosage:</strong> ${product.dosage}
          </div>
        </div>
        <div>
          <div class="product-price">₹${product.price}</div>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

// Cart Management
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      icon: product.icon
    });
  }

  saveCartToStorage();
  updateCartUI();
  updateOrderSummary();
  showToast(`${product.name} added to cart! 🛒`);
}

function removeFromCart(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    updateOrderSummary();
    showToast("Item removed from cart");
  }
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
    updateCartUI();
    updateOrderSummary();
  }
}

function updateCartUI() {
  // Update cart counts
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  floatingCartCount.textContent = totalItems;

  // Update cart total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = total;

  // Update cart content
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
        <p class="empty-cart-subtitle">Add some medicines to get started</p>
      </div>
    `;
  } else {
    cartContent.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">${item.icon}</div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-qty">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span style="margin: 0 8px; font-weight: 600;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <div class="item-price">₹${item.price * item.quantity}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function updateOrderSummary() {
  if (cart.length === 0) {
    summaryItems.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No items in cart</p>';
    summaryTotal.textContent = '0';
    return;
  }

  summaryItems.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.name} × ${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  summaryTotal.textContent = total;
}

// Cart Panel Functions
function openCart() {
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "auto";
}

// Local Storage Functions
function saveCartToStorage() {
  try {
    // Note: LocalStorage is disabled in strict instructions, but we'll keep the structure for completeness
    console.log('Cart saved:', cart);
  } catch (error) {
    console.error('Error saving cart:', error);
  }
}

function loadCartFromStorage() {
  try {
    // Note: LocalStorage is disabled in strict instructions, so cart starts empty
    cart = [];
  } catch (error) {
    console.error('Error loading cart:', error);
    cart = [];
  }
}

// Checkout Form Handling
function handleCheckout(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast("Please add items to cart first! 🛒");
    return;
  }

  const formData = new FormData(checkoutForm);
  const orderData = Object.fromEntries(formData);

  // Form Validation
  if (!orderData.name || !orderData.phone || !orderData.address || !orderData.city || !orderData.pincode) {
    showToast("Please fill all required fields ⚠️");
    return;
  }

  if (!/^\d{10}$/.test(orderData.phone)) {
    showToast("Please enter a valid 10-digit phone number 📱");
    return;
  }

  if (!/^\d{6}$/.test(orderData.pincode)) {
    showToast("Please enter a valid 6-digit pincode 📮");
    return;
  }

  // Process Order
  const orderSummary = {
    customer: orderData,
    items: cart,
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    timestamp: new Date().toISOString(),
    orderNumber: 'HP' + Date.now().toString().slice(-6)
  };

  console.log("Order placed:", orderSummary);

  // Show success modal
  showSuccessModal();

  // Clear cart and form
  cart = [];
  saveCartToStorage();
  updateCartUI();
  updateOrderSummary();
  checkoutForm.reset();
}

// Modal Functions
function showSuccessModal() {
  successModal.classList.add("open");
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  successModal.classList.remove("open");
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "auto";
  
  // Scroll to products section after closing
  setTimeout(() => {
    scrollToSection('products');
  }, 300);
}

// Toast Notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Global Functions for inline event handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.scrollToSection = scrollToSection;
window.closeModal = closeModal;

// Additional Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth animations when elements come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe product cards for animation
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach(card => {
      observer.observe(card);
    });
  }, 100);

  // Add floating animation to the floating cart when items are added
  const floatingCart = document.getElementById('floating-cart');
  let bounceTimeout;
  
  const originalAddToCart = window.addToCart;
  window.addToCart = function(productId) {
    originalAddToCart(productId);
    
    // Add bounce animation
    floatingCart.style.animation = 'bounce 0.6s ease';
    clearTimeout(bounceTimeout);
    bounceTimeout = setTimeout(() => {
      floatingCart.style.animation = '';
    }, 600);
  };
});

// Add bounce animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
  }
`;
document.head.appendChild(style);