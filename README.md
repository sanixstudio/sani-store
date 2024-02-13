# Sani-Store

## Introduction

Welcome to Sani-Store documentation! Sani-Store is an intuitive E-commerce Web Application designed to provide users with a seamless shopping experience for laptops from famous brands such as Apple, Dell, HP, and Asus. This documentation serves as a guide to understanding the features and functionalities of Sani-Store.

![Sani-Store Logo](/public/sani-store.png)

## Features

### 1. Product Showcase

Sani-Store showcases a wide range of laptop products from renowned brands. Users can explore products conveniently organized into categories, presented in a gallery-like format on the landing page.

### 2. Product Details

Users can view detailed information about each laptop product, including specifications, pricing, and availability.

### 3.Wishlist Management

Users can mark their favorite items by adding them to their wishlist for future reference.

### 4. Cart Management

Sani-Store allows users to add desired products to their cart for purchase. Users can manage their cart by adjusting quantities, removing items, and proceeding to checkout.

### 5. Search Functionality

The application provides a robust search functionality, allowing users to quickly find specific products based on their preferences.

### 6. Content Management with Sanity

Sani-Store utilizes Sanity for easy content management. Users can efficiently populate and manage store data through the Sanity dashboard.

## Tech Stack

- **React/Vite**: Frontend framework for building the user interface.
- **TypeScript**: For Type-safe programming and better code quality.
- **TailwindCSS/Shadcn/ui**: Frontend framework for building the user interface.
- **Zustand:** State management library for managing application state.
- **TanStack Query**: Data fetching and caching library for efficient data management.
- **Firebase:** Database for storing users' favorite items.
- **Clerk:** User Authentication service for secure login and authentication.
- **Sanity:** Content management system for managing store data.
- **React-hot**-toast: Notification library for handling notifications in the form of toasts.
- **React-Icons**: Library used for incorporating icons throughout the application.

## Getting Started

To get started with Sani-Store, follow these steps:

**1. Clone the Repository:** Clone the Sani-Store repository from [GitHub Repository](https://github.com/sanixstudio/sani-store.git).

```
git clone https://github.com/sanixstudio/sani-store.git
```

**2. Install Dependencies:** Navigate to the project directory and install dependencies using npm or yarn:

```
npm install
# or
yarn install
```

**3. Sign-up and Configure Sanity:**

- Sign-up for Sanity
- Create a new project
- Create a new dataset
- Create a new token

**4. Create Firebase Database and Configure Clerk:**

```
- Sign-up up for Firebase and create Firebase Database
- Get you project configuration data
```

**5. Configure Environment Variables for Firebase, Sanity and Clerk:**

```
VITE_SANITY_PROJECT_ID="sanity project id"
VITE_SANITY_DATASET="sanity dataset"
VITE_SANITY_SECRET_TOKEN="sanity secret token"

VITE_CLERK_PUBLISHABLE_KEY="clerk key"
VITE_CLERK_SECRET_KEY="clerk secret key"

VITE_HOST="your local host"

VITE_FIRE_BASE_API_KEY="firebase api key"
VITE_FIRE_BASE_AUTH_DOMAIN="firebase auth domain"
VITE_FIRE_BASE_PROJECT_ID="firebase project id"
VITE_FIRE_BASE_STORAGE_BUCKET="firebase storage bucket"
VITE_FIRE_BASE_MESSAGING_SENDER_ID="firebase messaging sender id"
VITE_FIRE_BASE_APP_ID="firebase app id"
"
```

**6. Start Development Server:** Start the development server to run the application locally:

```
npm run dev
# or
yarn dev
```

### Finally:

Open http://localhost:5173 with your browser to see the result.
