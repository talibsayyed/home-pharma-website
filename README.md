# Home Pharma - Online Medicine Store

## Overview
Home Pharma is a modern, user-friendly online medicine store designed to provide a seamless shopping experience for healthcare products. The platform allows users to browse, search, and purchase medicines and healthcare items with ease. It also includes features like a shopping cart, order summary, and checkout functionality.

## Features
- **Product Listing**: Displays a wide range of medicines and healthcare products.
- **Search and Filter**: Users can search for products by name or usage and filter by categories.
- **Shopping Cart**: Add, remove, and update product quantities in the cart.
- **Order Summary**: View a detailed summary of items in the cart before checkout.
- **Checkout Form**: Collects user details like name, phone, address, city, and pincode for order processing.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive UI**: Includes animations and toast notifications for better user experience.

## File Structure
```
home-pharma-website/
├── index.html       # Main HTML file
├── style.css        # CSS for styling the website
├── app.js           # JavaScript for functionality
└── README.md        # Project documentation
```

## Technologies Used
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/talibsayyed/home-pharma-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd home-pharma-website
   ```
3. Open `index.html` in your browser, or use a local server:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
     Visit `http://localhost:8000` in your browser.
   - Using Node.js:
     ```bash
     npx http-server
     ```
     Visit `http://localhost:8080` in your browser.

## Deployment
The project can be deployed using GitHub Pages:
1. Push the code to a GitHub repository.
2. Go to the repository's **Settings** > **Pages**.
3. Select the `main` branch as the source and save.
4. Access the website at `https://<your-username>.github.io/home-pharma-website/`.

## Features in Detail
### Product Listing
- Products are displayed in a grid layout with details like name, price, category, usage, dosage, and an icon.
- Each product has an "Add to Cart" button.

### Search and Filter
- **Search**: Users can search for products by name or usage.
- **Filter**: Products can be filtered by categories such as Tablets, Syrups, Vitamins, and First-aid.

### Shopping Cart
- Users can add products to the cart.
- Update product quantities or remove items.
- View the total price and item count.

### Checkout Form
- Collects user details for order processing.
- Validates phone number (10 digits) and pincode (6 digits).

### Order Summary
- Displays a summary of items in the cart with their quantities and total price.
- Generates a unique order number for each order.

## Code Highlights
### Product Data
The product data is stored in a JavaScript array:
```javascript
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
  // ...more products
];
```

### Cart Management
Functions to manage the cart:
- `addToCart(productId)`: Adds a product to the cart.
- `removeFromCart(productId)`: Removes a product from the cart.
- `updateQuantity(productId, change)`: Updates the quantity of a product in the cart.

### Checkout Validation
Validates user input in the checkout form:
```javascript
if (!/^
\d{10}$/.test(orderData.phone)) {
  showToast("Please enter a valid 10-digit phone number 📱");
  return;
}
if (!/^
\d{6}$/.test(orderData.pincode)) {
  showToast("Please enter a valid 6-digit pincode 📮");
  return;
}
```

## Future Enhancements
- **User Authentication**: Add login and signup functionality.
- **Payment Gateway**: Integrate online payment options.
- **Order History**: Allow users to view past orders.
- **Product Reviews**: Enable users to leave reviews and ratings.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries or feedback, please contact:
- **Name**: Talib Sayyed
- **Email**: [talibsayyed1999@gmail.com](mailto:your-email@example.com)
- **GitHub**: [https://github.com/talibsayyed](https://github.com/talibsayyed)
