# 🛍️ Weecom Product Dashboard

A small **Product Dashboard** built with **React + Vite + TailwindCSS + shadcn/ui + React Query**, using the [DummyJSON API](https://dummyjson.com/docs/products).

---

## 🚀 Features

- 📱 **Responsive Layout** (Sidebar + Header + Main Content)
- 🎨 **UI**: TailwindCSS + shadcn/ui (`Button`, `Card`, `Dialog`, `Table`, `Skeleton`)
- 📦 **Products Table**:
  - Fetch products with React Query
  - Pagination (Next / Previous)
  - Search by product name
  - Category filter dropdown
  - Loading skeletons
  - Error & Empty states
- 🔄 **CRUD Operations**:
  - ➕ Add Product (Dialog + Form)
  - ✏️ Edit Product (Dialog + Pre-filled Form)
  - ❌ Delete Product (Optimistic UI update)
- ⚡ Auto-refresh product list after mutations
- ✨ **Bonus Features**:
  - Category dropdown filter
  - Show total count + page info
  - Artificial delay to demonstrate loaders

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [DummyJSON API](https://dummyjson.com/)

---

## 📦 Setup Instructions

Clone repo and install dependencies:

```bash
git clone https://github.com/Mrakshaymehta/weecom-dashboard.git
cd weecom-dashboard
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🌍 Deployment

This app is deployed on **Netlify**:  
👉 [Live Demo](https://weecomdashboard.netlify.app/)

To deploy your own version:

1. Push your repo to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Add new site → Import from GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`

---

## 📸 Screenshots

_Add screenshots of your dashboard here (product table, add/edit dialog, etc.)_

---

## 👨‍💻 Author

Built by **Akshay Mehta** ✨
