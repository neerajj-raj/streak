interface TypeInventoryItem {
  id: number;
  title: string;
  permalink: string;
  image: string;
  hover_image: string;
  /**
   * on_call for Price On Call.
   * no_price for Sold Out and don't show the price then.
   * Fixed for normal instock items which has a valid fixed price.
   */
  price_type: "on_call" | "no_price" | "Fixed";
  price: number;
  currency: string;
  make: string;
  make_cat_id: string;
  model: string;
  model_cat_id: string;
  year: string;
  status_label: string;
  is_sold: boolean;
}

interface TypePagination {
  total_records: number;
  total_pages: number;
  current_page: number;
  records_per_page: number;
}

interface TypeInventoryResponse {
  pagination: TypePagination;
  data: TypeInventoryItem[];
}

// Filters Interface matching your API parameters
interface TypeInventoryFilters {
  page?: number;
  per_page?: number;
  ad_title?: string; // This maps to 's' search in WordPress
  sort?: "id-desc" | "id-asc" | "title-asc" | "title-desc" | "price-desc" | "price-asc";

  // Ranges
  min_price?: number;
  max_price?: number;
  mileage_from?: number;
  mileage_to?: number;
  year_from?: number;
  year_to?: number;
  engine_capacity?: string;

  // Taxonomies
  cat_id?: number; // Make/Category ID
  country_id?: number; // Location ID

  // Exact Match Filters
  transmission?: string;
  engine_type?: string;
  body_type?: string;
  color_family?: string;
  ad_type?: string;
  insurance?: string;
  assembly?: string;
  condition?: string;
}

interface TypeFilterItem {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface TypeCategory extends TypeFilterItem {
  children: TypeCategory[];
}

interface TypeInventoryFilterResponse {
  categories: TypeCategory[];
  years: TypeFilterItem[];
  locations: TypeFilterItem[];
  engine_types: TypeFilterItem[];
  engine_capacity: TypeFilterItem[];
  color_family: TypeFilterItem[];
  car_insurance: TypeFilterItem[];
  car_assembly: TypeFilterItem[];
  transmissions: TypeFilterItem[];
  body_type: TypeFilterItem[];
  car_type: TypeFilterItem[];
  condition: TypeFilterItem[];
}
