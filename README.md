# E-Commerce Web Application

This is a simple e-commerce web application built using **Java Spring Boot** for the backend and **Angular** for the frontend. The application provides a seamless shopping experience with a wide range of features.

## Table of Contents

- [Features](#features)
  - [User Management](#user-management)
  - [Product Management](#product-management)
  - [Shopping Cart](#shopping-cart)
  - [Checkout Process](#checkout-process)
  - [Order Management](#order-management)
  - [Payment Processing](#payment-processing)
  - [Security](#security)
  - [Additional Features](#additional-features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Features

### User Management
- **User Login/Logout**: Secure user authentication with session management.

### Product Management
- **Product Listing**: Browse available products with detailed descriptions.
- **Product Details**: View individual product details.
- **Product Search**: Search for products by name or category.
- **Product Categories**: Explore products by categories.

### Shopping Cart
- **Add to Cart**: Add desired products to the shopping cart.
- **View Cart**: Review the items in the cart before checkout.
- **Update Cart**: Modify quantities or remove items from the cart.
- **Remove from Cart**: Easily remove products from the cart.

### Checkout Process
- **Shipping Information**: Enter shipping details for order delivery.
- **Billing Information**: Provide billing details for payment.
- **Payment Gateway Integration**: Secure integration with payment gateways.
- **Order Review**: Review order details before placing it.
- **Place Order**: Finalize and place the order.

### Order Management
- **Order History**: View past orders and their details.

### Payment Processing
- **Multiple Payment Options**: Support for various payment methods.
- **Secure Payment Processing**: Ensure transactions are secure.
- **Transaction History**: Track payment transactions.

### Security
- **User Authentication**: Secure login and user data management.
- **Data Encryption**: Protect sensitive data with encryption.
- **Secure APIs**: All APIs are secured to prevent unauthorized access.

### Additional Features
- **Responsive Design**: The application is optimized for both mobile and desktop devices.

## Project Structure

The project is organized into three main folders:

1. **01-starter-files**: Contains script files to set up the database.
2. **02-backend**: Source code for the backend built with Java Spring Boot.
3. **03-frontend**: Source code for the frontend built with Angular.

## Technology Stack

- **Backend**: Java Spring Boot
- **Frontend**: Angular, HTML, CSS, Bootstrap
- **Authentication**: Okta
- **Database**: MySQL
- **Payment Gateway**: Stripe

## Installation

### Prerequisites
- Java 11 or later
- Node.js 14 or later
- Angular CLI
- Any IDE supports JAVA and Angular (e.g., IntelliJ IDEA, Visual Studio Code)
- MySQL server and MySQL Workbench installed and running
- [Allow invalid certificates for resources loaded from localhost](https://priesdelly.medium.com/how-to-access-https-on-localhost-in-google-chrome-cf92a929ccea#:~:text=1.,localhost%20in%20the%20address%20bar.).

### Backend Setup (IntelliJ IDEA)

1. Clone the repository:
    ```bash
    git clone https://github.com/justoanff/eCommerce-Website.git
    ```
2. Open the `02-backend` folder in IntelliJ IDEA:
    - Select `File > Open`, navigate to the `02-backend` directory, and open it.
    - Ensure the project is imported as a Maven project.
  
3. Configure the MySQL database connection:
    - Open `src/main/resources/application.properties`.
    - Update the database connection properties:
    ```properties
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    ```
4. Run the application:
    - Locate the main application class annotated with `@SpringBootApplication`.
    - Right-click on the class and select `Run 'EcommerceApplication'`.

5. The backend application should now be running.

### Frontend Setup (Visual Studio Code)

1. Open the `03-frontend` folder in Visual Studio Code:
    - Select `File > Open Folder`, navigate to the `03-frontend` directory, and open it.

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Run the Angular development server:
    ```bash
    npm start
    ```

4. Access the application at `https://localhost:4200`.

### Database Setup (MySQL)

1. Navigate to the `01-starter-files` directory.
2. Use the provided SQL scripts to set up your MySQL database:
    - Open your MySQL command line or a MySQL client like MySQL Workbench.
    - Run the `01-create-user.sql`, `03-countries-and-states.sq`, `04-create-order-tables.sql` script to create the database schema.
    - Run the `02-refresh-database-with-100-products.sql` script to populate the database with initial data.

## Usage

- Register or log in to your account.
- Browse and search for products.
- Add products to your cart and proceed to checkout.
- Complete the order using the payment gateway.
- View your order history.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.

## Credits

This project was developed with guidance from [Chad Darby](https://github.com/darbyluv2code), Instructor.

## License

This project is licensed under the MIT License.
