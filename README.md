# EloniEcommerce

EloniEcommerce is a modern, scalable ecommerce platform built with **React** and **Vite**. The project integrates various libraries such as **Firebase**, **Theme UI**, **Formik**, and others to create a user-friendly and customizable ecommerce experience. 

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will guide you on how to set up and run the project on your local machine for development and testing.

### Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [Yarn](https://yarnpkg.com/)
- A Firebase project for configuration

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/EloniEcommerce.git
cd EloniEcommerce
npm install
```



## Folder Structure
src/
│
├── Theme/ # Theme UI configurations  
├── assets/ # Static assets (images, fonts, etc.)  
├── components/ # Reusable React components  
├── firebaseConfig/ # Firebase setup and configuration  
├── pages/ # Application pages (e.g., Home, Product)  
├── utils/ # Utility functions and helpers  
├── App.tsx # Main application entry point  
├── main.tsx # Vite main file to bootstrap React  
├── theme.tsx # Global Theme UI settings  
└── vite-env.d.ts # Vite environment type declaration  

## Technologies Used

**React 18:** A JavaScript library for building user interfaces.  
**Vite:** A fast build tool for modern web projects.  
**Theme UI:** A library for creating theme-based UI components.  
**Formik:** A form management library for React.  
**Firebase:** For authentication and Firestore database integration.  
**React Router:** For client-side routing.  
**Yup:** A schema builder for form validation.  

### Additional libraries
**@emotion/react:** CSS-in-JS library used with Theme UI.  
**@mui/icons-material:** Material Design icons for React.  
**react-icons:** Icon library for React.  
**react-slick:** Carousel component for React.  
**slick-carousel:** CSS for React Slick.  
**ionicons:** A set of beautiful, high-quality icons.  

## Features
**Firebase Authentication:** Sign-up, login, and authentication using Firebase.  
**Product Display:** Browse through available products.  
**Formik Forms:** Form handling and validation using Formik and Yup.  
**Responsive Design:** Ensures the application works well on different screen sizes.  
**Theme UI:** Provides customizable theming across the app.  

## Running the project
```bash
npm install
```

or

```bash
npm run dev
```
