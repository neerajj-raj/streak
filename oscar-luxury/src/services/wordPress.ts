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

import { mockEnabled, wpBaseUrl } from "@utils/config";
import { mockResponse } from "./mockResponse";

const fetchFromWordPress = async (urlPath: string, mockType: string) => {
  if (!mockEnabled) {
    try {
      console.info(`[fetchFromWordPress: ${new Date()}] Started for fecting url: ${urlPath}`);
      const response = await fetch(`${wpBaseUrl}${urlPath}`);

      if (response?.ok) {
        const responseBody = await response?.json();
        console.info(`[fetchFromWordPress: ${new Date()}] Completed for fecting url: ${urlPath}`);
        return responseBody;
      } else {
        console.info(`[fetchFromWordPress: ${new Date()}] HTTP error! Status: ${response?.status}`);
      }
    } catch (error) {
      console.error(`[fetchFromWordPress] Error: ${error}`);
    }
  }
  return mockResponse(mockType);
};

export const getHomePageContents = async () => {
  return await fetchFromWordPress("/wp-json/custom/v1/home-contents", "home");
};

export const getPageContentBySlug = async (slug: string) => {
  return await fetchFromWordPress(`/wp-json/wp/v2/pages?slug=${slug}`, slug);
};

export const getSearchFilters = async () => {
  return await fetchFromWordPress(`/wp-json/custom/v1/home-search`, "home-search");
};

export const getMenuContents = async () => {
  return await fetchFromWordPress(`/wp-json/custom/v1/menus`, "menus");
};

export const getAboutPageContents = async () => {
  return await fetchFromWordPress("/wp-json/custom/v1/about-contents", "about");
};

/**
 * Fetches inventory with optional filters.
 * Usage: getInventoryPageContents({ min_price: 50000, make_id: 15 })
 */
export const getInventoryPageContents = async (filters: TypeInventoryFilters = {}): Promise<TypeInventoryResponse> => {
  // 1. Convert the filters object into a valid Query String
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    // Only append parameters that have a value (skips undefined/null/empty strings)
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  const queryString = params.toString();
  const endpoint = `/wp-json/custom/v1/search-inventory${queryString ? `?${queryString}` : ""}`;

  return await fetchFromWordPress(endpoint, "inventory");
};

export const getInventoryFilters = async (): Promise<TypeInventoryFilterResponse> => {
  return await fetchFromWordPress(`/wp-json/custom/v1/filters`, "inventory");
};

export const getPdpDetailsBySlug = async (slug: string = "") => {
  if (!slug) return {};
  return await fetchFromWordPress(`/wp-json/custom/v1/ad-post?slug=${slug}`, "product-details");
};

export const getPLPContentBySlug = async (taxonomy: string, slug: string, page: number) => {
  return await fetchFromWordPress(`/wp-json/custom/v1/product-list?taxonomy=${taxonomy}&slug=${slug}&page=${page}`, "product-list");
};


export const getPlpFilters = async () => {
  return await fetchFromWordPress("/wp-json/custom/v1/filters", "filters");
};