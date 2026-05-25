# 🎧 Audiophile E-commerce Website

Welcome to **Audiophile**, a high-end audio e-commerce web application. This project is a fully responsive, pixel-perfect modern storefront built using **React**, **Vite**, and **Redux Toolkit** for enterprise-grade state management.

---

## 🚀 Key Features

- **Advanced State Management:** Global cart architecture handling product additions, dynamic quantities, and complex mathematical calculations with automated performance memoization (`useMemo`).
- **Robust Form Validation:** Complete multi-step checkout process with strict field validation, dynamic payment method toggling, and interactive error feedback.
- **Global Toast System:** Reactive, UX-optimized global toast notifications powered by Redux state to signal successful additions or max-capacity (`999` items) limits.
- **Responsive Architecture:** Built with a Mobile-First design philosophy using Tailwind CSS, supporting fully animated navigation drawers and overlays.
- **Seamless Navigation:** Client-side routing managed through React Router DOM with explicit 404 error page handling.

---

## 🛠️ Tech Stack & Architecture

| Category             | Technology Used                               |
| :------------------- | :-------------------------------------------- |
| **Frontend Core**    | React 19, Vite, JavaScript (ES6+)             |
| **State Management** | Redux Toolkit (Slices, Actions, Global Store) |
| **Styling & UI**     | Tailwind CSS, Modern Responsive CSS Utilities |
| **Routing**          | React Router DOM v6                           |
| **Icons & Assets**   | Embedded SVGs and fully optimized WebP assets |

### 📂 Clean Component Architecture

The directory structure follows strict modular components separating global slices, features, shared layouts, and atomic dynamic UI elements:

```text
src/
├── assets/             # Optimized global icons and image constants
├── components/
│   ├── product-details/   # Page layout blocks and product banners
│   ├── shared/         # Reusable layouts (Navbar, Footer, Shop categories)
│   └── ui/             # Atomic components (Buttons, Toast, Overlay)
├── features/
│   └── cart/           # Redux Cart Slice, CartDropdown, and logic sections
├── data/               # Centralized product JSON database
└── pages/              # Routed full views (Home, ProductDetails, Categories)
```
