export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-3">
        <a href="#" className="block p-2 rounded hover:bg-gray-700">
          Products
        </a>
        <a href="#" className="block p-2 rounded hover:bg-gray-700">
          Orders
        </a>
        <a href="#" className="block p-2 rounded hover:bg-gray-700">
          Settings
        </a>
      </nav>
    </aside>
  );
}