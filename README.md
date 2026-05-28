# Audiophile E-Commerce Website 🎧

A premium, fully responsive, and high-performance audio equipment e-commerce web application built using modern web technologies. The project features clean code architecture, advanced form state management, modular design pattern, and centralized globally managed application state.

---

## 🛠️ Tech Stack & Tooling

The application leverages a robust stack designed for production-level stability, speed, and absolute scalibilty:

- **Core Library:** React 18 (Functional Components & Hooks)
- **Routing Engine:** React Router DOM v6 (Nested dynamic parameterized routing)
- **Global State Management:** Redux Toolkit (Slices architecture)
- **Form Management:** React Hook Form (Context-driven via FormProvider)
- **Styling Framework:** Tailwind CSS (Custom utility ecosystem, responsive break-points)
- **Asset Optimization:** Semantic HTML5 (`<picture>`, native lazy loading constructs)

---

## 📂 Project Architecture & Directory Structure

The repository adheres to a highly modular file arrangement structure to isolate scopes and preserve strict maintainability guidelines:

```text
src/
│
├── assets/                  # Centralized static image, graphics, and asset maps
├── features/                # Redux Toolkit modular slices (Cart state engine)
├── hooks/                   # Custom business logic abstractions (useCartTotals, useMediaQuery)
├── components/              # Structural and view elements layer
│    ├── layout/             # Persistent site scaffolding frames (Header / Footer / Layout)
│    ├── shared/             # Reusable composite layout patterns (BestGear, Shop grid)
│    ├── ui/                 # Atomic single-purpose visual elements (Inputs, Buttons, Badges)
│    └── checkout/           # Isolated domain-specific checkout multi-form subsections
├── pages/                   # Route targets and global full-screen layouts
└── utils/                   # Shared dynamic functional routines (ScrollToTop behaviors)
```
