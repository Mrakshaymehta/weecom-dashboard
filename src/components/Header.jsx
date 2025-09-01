import AddProductDialog from "./AddProductDialog";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold">Product Dashboard</h1>
      <AddProductDialog />
    </header>
  );
}