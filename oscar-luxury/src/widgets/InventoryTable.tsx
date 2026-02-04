/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Neeraj
 */

import { hasArrayElements } from "@utils/commonUtils";

const InventoryTable = ({ product, sortedCategories }: { product: Record<string, any>; sortedCategories: Array<Record<string, any>> }) => {
  const {
    _carspot_ad_price: price,
    _carspot_ad_price_type: priceType,
    _carspot_ad_condition: condition,
    _carspot_ad_type: type,
    _carspot_ad_engine_types: engineType,
    _carspot_ad_mileage: mileage,
    _carspot_ad_engine_capacities: engineCapacity,
    _carspot_ad_years: modelYear,
    _carspot_ad_transmissions: transmission,
    _carspot_ad_body_types: bodyType,
    _carspot_ad_colors: exteriorColor,
    _carspot_ad_warranty: warranty,
    _carspot_ad_assembles: assembly,
    _carspot_ad_country: country,
    _carspot_ad_country_states: state,
    _carspot_ad_country_cities: city,
    _carspot_ad_country_towns: town,
  } = product?.private_meta || {};

  const getMakeModelAndVersion = () => {
    if (!hasArrayElements(sortedCategories)) return { label: "", value: "" };

    const labels = ["Make", "Model", "Version"];
    const basePath = "/inventory";
    const items = sortedCategories.slice(0, 3);

    return {
      label: labels.slice(0, items.length).join(", "),
      value: "",
      element: (
        <div className="mt-1 text-sm text-slate-600">
          {items.map((item, index) => (
            <span key={item.id}>
              <a href={`${basePath}?cat_id=${item.id}`} className="hover:underline">
                {item.name}
              </a>
              {index < items.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>
      ),
    };
  };

  const getLocation = () => {
    const basePath = "/inventory";
    const getById = (id?: string) => product?.taxonomies?.ad_country?.find((item: Record<string, any>) => String(item.id) === id);
    const locations = [getById(town), getById(city), getById(state), getById(country)].filter(Boolean) as Array<{ id: number; name: string; slug: string }>;

    if (!hasArrayElements(locations)) return { label: "" };

    return {
      label: "Location",
      value: "",
      element: (
        <div className="mt-1 text-sm text-slate-600">
          {locations.map((loc, index) => (
            <span key={loc.id}>
              <a href={`${basePath}?country_id=${loc.id}`} className="hover:underline">
                {loc.name}
              </a>
              {index < locations.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>
      ),
    };
  };

  const data = [
    getMakeModelAndVersion(),
    { label: "Price", value: `AED ${Number(price).toLocaleString("en-US")} (${priceType})` },
    { label: "Mileage", value: `${mileage} km` },
    { label: "Condition", value: condition },
    { label: "Type", value: type },
    { label: "Warranty", value: warranty },
    { label: "Year", value: modelYear },
    { label: "Body Type", value: bodyType },
    { label: "Transmission", value: transmission },
    { label: "Engine Size", value: `${engineCapacity} cc` },
    { label: "Engine Type", value: engineType },
    { label: "Assembly", value: assembly },
    { label: "Color", value: exteriorColor },
    getLocation(),
  ];

  const colsDesktop = 4;
  const colsMobile = 2;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((item, i) => {
          const isLastColMobile = (i + 1) % colsMobile === 0;
          const isLastColDesktop = (i + 1) % colsDesktop === 0;

          const rowsDesktop = Math.ceil(data.length / colsDesktop);
          const rowIndexDesktop = Math.floor(i / colsDesktop) + 1;
          const isLastRowDesktop = rowIndexDesktop === rowsDesktop;

          const rowsMobile = Math.ceil(data.length / colsMobile);
          const rowIndexMobile = Math.floor(i / colsMobile) + 1;
          const isLastRowMobile = rowIndexMobile === rowsMobile;

          if (!item?.label) return;

          return (
            <div
              key={i}
              className={[
                "p-4 hover:bg-primary/5",
                !isLastColMobile && "border-r border-slate-200 md:border-r",
                !isLastColDesktop && "md:border-r md:border-slate-200",
                !isLastRowMobile && "border-b border-slate-200 md:border-b",
                !isLastRowDesktop && "md:border-b md:border-slate-200",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
              {item && "element" in item ? item.element : <div className="mt-1 text-sm text-slate-600">{item.value}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryTable;
