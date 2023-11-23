 # Project Link- https://desi-bazzaar.vercel.app/

# DesiBazaar E-Commerce Website
DesiBazaar is an e-commerce website designed for customers to buy products, with an intuitive administrative interface for managing product data. The application leverages Firebase for data storage and Razorpay for secure transactions.

# Table of Contents
Features
Technologies Used
Installation
Configuration
Usage
Database
Transactions
Contributing
License
# Features
# Customer Interface:

Browse products
View product details
Add products to the cart
Secure checkout process via Razorpay
# Admin Interface:

Add new products
Delete existing products
Manage product details
# Technologies Used
# Firebase:

Realtime Database for product information
Authentication for secure admin login
# Razorpay:

Payment gateway for secure transactions
# Installation
Clone the Repository:

# Copy code
 git clone https://github.com/your-username/desibazaar.git
 cd desibazaar
 Install Dependencies:


# Copy code
npm install
Set Up Firebase:

Create a Firebase project: Firebase Console.
Configure your Firebase project by adding your Firebase configuration details to firebaseConfig in config.js.
# Set Up Razorpay:

Create a Razorpay account: Razorpay Dashboard.
Obtain your API key and add it to razorpayKey in config.js.
# Configuration
Update the configuration files with your specific credentials:

config.js: Firebase and Razorpay configuration.
# Usage
# Customer:

Visit the DesiBazaar website.
Browse products, view details, and add to the cart.
Proceed to checkout and make secure transactions through Razorpay.
# Admin:

Access the admin panel at http://localhost:8000/admin.
Log in using admin credentials.
Add new products or delete existing ones.
# Database
DesiBazaar uses Firebase Realtime Database to store and retrieve product information. The database structure is defined in Firebase.

# Transactions
Razorpay is integrated for secure online transactions. Ensure your Razorpay API key is correctly configured in config.js.

# Contributing
If you'd like to contribute to DesiBazaar, please follow our contributing guidelines.

# License
DesiBazaar is licensed under the MIT License.


