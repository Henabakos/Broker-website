# Broker Web Application

## Project Overview
This project is a Broker web application that provides various functionalities for users including viewing homes for sale, homes for rent, services, and contacting the company. Additionally, admin users can create new posts. The application includes authentication features allowing users to log in and sign up.

## Pages and Features

### Home Page
- **Description:** The homepage welcomes users with a hero section that introduces the website and its services.
- **Image:**
  ![Home Page](src\assets\images\Home.png)

### For Sale Page
- **Description:** This page lists all the homes available for sale with details such as title, description, price, and images.
- **Image:**
  ![For Sale Page](src\assets\images\ForSale.png)

### For Rent Page
- **Description:** This page lists all the homes available for rent with details such as title, description, price, and images.
- **Image:**
  ![For Rent Page](src\assets\images\ForRent.png)

### Services Page
- **Description:** This page provides an overview of the services offered by the company.
- **Image:**
  ![Services Page](src\assets\images\Services.png)

### Contact Us Page
- **Description:** Users can fill out a form to send a message to the company.
- **Image:**
  ![Contact Us Page](src\assets\images\ContactUs.png)

### Create Post Page (Admin Only)
- **Description:** Admin users can create new posts by uploading images and filling out details such as title, description, and price.
- **Image:**
  ![Create Post Page](src\assets\images\CreatePost.png)

### Login Page
- **Description:** Users can log in to their accounts to access additional features.
- **Image:**
  ![Login Page](src\assets\images\SignIn.png)

### Sign Up Page
- **Description:** New users can sign up for an account to start using the application.
- **Image:**
  ![Sign Up Page](src\assets\images\SignUp.png)

## Project Structure

### Components
- **Navbar.jsx:** The navigation bar that appears on all pages.
- **Footer.jsx:** The footer that appears on all pages.
- **Cards.jsx:** A component to display individual property cards.

### Pages
- **Home.jsx:** Home page component.
- **ForSale.jsx:** For Sale page component.
- **ForRent.jsx:** For Rent page component.
- **Services.jsx:** Services page component.
- **ContactUs.jsx:** Contact Us page component.
- **CreatePost.jsx:** Create Post page component (Admin Only).
- **Login.jsx:** Login page component.
- **SignUp.jsx:** Sign Up page component.

### Firebase Configuration
- **firebase.js:** Configuration for Firebase services including Firestore and Storage.

## Setup and Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/real-estate-web-app.git
   cd real-estate-web-app
