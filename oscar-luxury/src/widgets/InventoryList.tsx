/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Vishakh B S
 */
import ProductCard from "./ProductCard";

interface InventoryListProps {
  data: TypeInventoryItem[];
}

export default function InventoryList({ data }: InventoryListProps) {
  // Empty State Handling
  if (!data || data.length === 0) {
    return (
      <div className="flex h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
        <h3 className="text-lg font-semibold text-slate-900">No cars found</h3>
        <p className="mt-1 text-sm text-slate-500">Try adjusting your filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {data.map((car) => (
        <ProductCard key={car.id} item={car} />
      ))}
    </div>
  );
}
