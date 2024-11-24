# EazyReach

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Getting Started](#getting-started)

## Introduction

Welcome to **EazyReach**, where resources meet opportunity, A revolutionary platform designed to empower citizens, reduce poverty, and tackle youth unemployment in Nigeria. This project is a modern web application, with the user interface built using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) and other frontend technologies. The project follows a well-organized structure to ensure scalability and maintainability.

## Folder Structure

The project is organized into the following directories:

```
.
├── src
│   ├── application
│   │   ├── DashboardApp
│   │   │   └── index.tsx
│   │   ├── LandingPage
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── assets
│   │   ├── fonts
│   │   └── react.svg
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer
│   │   │   └── Navbar
│   │   ├── ui
│   │   │   ├── ButtonLink
│   │   │   ├── Cards
│   │   │   └── Headings
│   │   └── index.tsx
│   ├── routes
│   │   └── router.tsx
│   ├── types
│   │   ├── buttonlink.ts
│   │   ├── card
│   │   │   ├── articlecard.ts
│   │   │   ├── blogcard.ts
│   │   │   ├── featurecard.ts
│   │   │   └── teamcard.ts
│   │   └── headings.ts
│   ├── utils
│   │   └── cn.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── ...
├── public
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
├── netlify.toml
├── ...
```

### Key Directories

- **`src/application`**: Contains the main application pages or modules, such as the Dashboard and Landing Page.
- **`src/assets`**: Holds static assets like fonts and images.
- **`src/components`**: 
  - **`layout`**: Contains layout components such as the `Footer` and `Navbar`.
  - **`ui`**: Contains reusable UI components, organized into subdirectories like `ButtonLink`, `Cards`, and `Headings`.
- **`src/routes`**: Manages the application's routing.
- **`src/types`**: TypeScript type definitions, particularly for card components like `articlecard.ts`, `blogcard.ts`, etc.
- **`src/utils`**: Utility functions, such as `cn.ts` for handling class names.
- **`src/index.css`**: Global CSS for the project.

## Components Overview

### Layout Components
- **Footer**: The footer component used across the application.
- **Navbar**: The navigation bar for the application.

### UI Components
- **ButtonLink**: A reusable button component that handles click events and navigation links.
- **Cards**: 
  - **ArticleCard**: Displays information about articles.
  - **BlogCard**: Specifically designed for blog posts.
  - **FeatureCard**: Highlights features of the application.
  - **TeamCard**: Showcases team members.
- **Headings**: Custom heading components with additional styles or functionalities.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AJ1732/easy-reach.git
   cd easy-reach
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   - Visit `http://localhost:5173` in your browser.
