import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import EditProductDialog from "./EditProductDialog";

export default function ProductsTable() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const queryClient = useQueryClient();

  // Fetch categories for dropdown
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // Handle both old and new DummyJSON formats
        const categoryList = data.map((c) =>
          typeof c === "string" ? c : c.slug
        );
        setCategories(categoryList);
      });
  }, []);

  // Fetch products
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page, search, category],
    queryFn: async () => {
      let url;
      if (search) {
        url = `https://dummyjson.com/products/search?q=${search}&limit=10&skip=${
          page * 10
        }`;
      } else if (category !== "all") {
        url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${
          page * 10
        }`;
      } else {
        url = `https://dummyjson.com/products?limit=10&skip=${page * 10}`;
      }

      // Always add artificial delay for loading demo
      url += url.includes("?") ? "&delay=1000" : "?delay=1000";

      console.log("Fetching URL:", url);

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
    keepPreviousData: true,
  });

  // Delete mutation with optimistic update
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      return res.json();
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const prevData = queryClient.getQueryData([
        "products",
        page,
        search,
        category,
      ]);

      if (prevData) {
        queryClient.setQueryData(["products", page, search, category], {
          ...prevData,
          products: prevData.products.filter((p) => p.id !== id),
          total: prevData.total - 1,
        });
      }

      return { prevData };
    },
    onError: (err, id, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(
          ["products", page, search, category],
          context.prevData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-600">Failed to load products.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setPage(0);
            setSearch(e.target.value);
          }}
          className="border rounded px-3 py-2 w-full md:w-1/3"
        />

        {/* Category dropdown */}
        <select
          value={category}
          onChange={(e) => {
            setPage(0);
            setCategory(e.target.value);
          }}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      {data.products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.title}</TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell className="flex gap-2">
                  <EditProductDialog product={p} />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteMutation.mutate(p.id)}
                  >
                    {deleteMutation.isLoading ? "Deleting..." : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Pagination + Info */}
      <div className="flex items-center gap-4 flex-wrap">
        <Button
          variant="outline"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
        >
          Previous
        </Button>
        <span>
          Page {page + 1} / {Math.ceil(data.total / 10)}
        </span>
        <Button
          variant="outline"
          disabled={(page + 1) * 10 >= data.total}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
        <p className="text-sm text-gray-600">
          Showing {data.products.length} of {data.total} products
        </p>
      </div>
    </div>
  );
}