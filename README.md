# ALX Listing App
This project is an Airbnb-style listing application built with Next.js, TypeScript, and Tailwind CSS. The goal is to create a clean and responsive web app where users can browse property listings, view details, and interact with a simple booking-like interface. The project focuses on building a modern UI, practicing component-based development, and gaining hands-on experience with Next.js while following best practices for scalability and performance.


# Project Structure Overview

components/
Contains all reusable UI building blocks of the application.

components/common/Card.tsx → A reusable Card component for displaying property details such as images, titles, and prices.

components/common/Button.tsx → A customizable Button component for user actions like “Book Now,” “View Details,” etc.

interfaces/
Defines all TypeScript interfaces used across the project to ensure type safety and maintain consistency.

interfaces/index.ts → Placeholder interfaces for components, e.g., CardProps and ButtonProps, which describe the props passed into reusable components.

constants/
Stores values that are reused throughout the project to avoid duplication and keep the code maintainable.

constants/index.ts → Holds constants such as API URLs, UI text, and configuration settings.

public/assets/
Contains all static assets (images, icons, SVGs, etc.) that are needed across the project. These files can be accessed directly via /assets/....

Example: Placeholder property images for the listing cards.

# Getting Started

Follow these steps to run the project locally:

1. Clone the Repository
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

2. Install Dependencies

Make sure you have Node.js (>=18) and npm installed.

npm install

3. Run the Development Server
npm run dev