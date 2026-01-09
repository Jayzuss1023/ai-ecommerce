"use client";

import { PanelLeft, PanelLeftClose } from "lucide-react";
import { useState } from "react";
import type {
  ALL_CATEGORIES_QUERYResult,
  FILTER_PRODUCTS_BY_NAME_QUERYResult,
} from "@/sanity.types";
import { Button } from "../ui/button";
import { ProductFilters } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

interface ProductSectionProps {
  categories: ALL_CATEGORIES_QUERYResult;
  products: FILTER_PRODUCTS_BY_NAME_QUERYResult;
  searchQuery: string;
}

export function ProductSection({
  categories,
  products,
  searchQuery,
}: ProductSectionProps) {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="">
      {/* Header wtih results count and fitler toggle */}
      <div>
        <p>
          {products.length} {products.length === 1 ? "products" : "products"}{" "}
          {searchQuery && (
            <span>
              {" "}
              for &quot;<span className="font-medium">{searchQuery}</span>&quot;
            </span>
          )}
          found
        </p>

        {/* Filter toggle button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFiltersOpen(!filtersOpen)}
          aria-label={filtersOpen ? "Hide filters" : "Show filters"}
        >
          {filtersOpen ? (
            <>
              <PanelLeftClose className="h-4 w-4" />
              <span className="hiden sm:inline">Hide Filters</span>
              <span className="sm:hidden">Hide</span>
            </>
          ) : (
            <>
              <PanelLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Show Filters</span>
              <span className="sm:hidden">Filters</span>
            </>
          )}
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        <aside
          className={`shrink-0 transition-all duration-300 ease-in-out ${
            filtersOpen ? "w-full lg:w-72 lg:opacity-100" : "hidden lg:hidden"
          }`}
        >
          <ProductFilters categories={categories} />
        </aside>

        {/* Product Grid - Expands to full width when filters hidden */}
        <main className="flex-1 transition-all duration-300">
          {" "}
          <ProductGrid products={products} />{" "}
        </main>
      </div>
    </div>
  );
}
