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

# 1️⃣ Clone the repository
git clone https://github.com/Mrakshaymehta/weecom-dashboard.git
cd weecom-dashboard

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run locally (dev mode)
npm run dev
# (open http://localhost:5173)

# 4️⃣ Build for production
npm run build

# 5️⃣ Preview production build locally
npm run preview
# (open http://localhost:4173)

# 6️⃣ Push to GitHub (if not already pushed)
git init
git add .
git commit -m "Initial commit: Product Dashboard with CRUD and bonus features"
git branch -M main
git remote add origin https://github.com/Mrakshaymehta/weecom-dashboard.git
git push -u origin main

# 7️⃣ Deploy to Netlify
# (No CLI needed, just steps in Netlify dashboard)
#   - Go to https://app.netlify.com/
#   - New Site → Import from GitHub
#   - Select your repo: weecom-dashboard
#   - Build command: npm run build
#   - Publish directory: dist
#   - Deploy

# 8️⃣ Final Live URL (already deployed)
# 👉 https://weecomdashboard.netlify.app/

👨‍💻 Author

Built by Akshay Mehta ✨
