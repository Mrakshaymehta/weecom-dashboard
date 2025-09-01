import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProductsTable from "./components/ProductsTable";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-50">
          <ProductsTable />
        </main>
      </div>
    </div>
  );
}