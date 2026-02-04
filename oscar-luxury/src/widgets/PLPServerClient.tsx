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
 * @author Minna Ancy Mathew
 */

import { Script } from "streak/components";

interface PLPQueryParams {
  taxonomy: "ad_cats" | "ad_tags";
  slug: string;
  page?: number;
}

interface PLPResponse {
  data?: any[];
  category_name?: string;
  pagination?: {
    total_records: number;
    total_pages: number;
    current_page: number;
    per_page: number;
  };
}

interface PLPClient {
  getPLPContent?: (params: PLPQueryParams) => Promise<PLPResponse>;
}

interface PLPServerClientOptions {
  WP_BASE_URL: string;
}

const PLPServerClient = () => {
  return (
    <Script
      id="PLPServerClient"
      options={(opts) => ({
        ...opts,
        WP_BASE_URL: "https://oscarluxury.com",
      })}
    >
      {(gDom: any, options: any) => {
        const { WP_BASE_URL } = options as PLPServerClientOptions;
        const client = gDom as PLPClient;

        client.getPLPContent = async (
          params: PLPQueryParams
        ): Promise<PLPResponse> => {
          const { taxonomy, slug, page = 1 } = params;

          if (!taxonomy || !slug) {
            throw new Error("taxonomy and slug are required");
          }

          const baseUrl = `${WP_BASE_URL}/wp-json/custom/v1/product-list`;
          const url = new URL(baseUrl);

          url.searchParams.set("taxonomy", taxonomy);
          url.searchParams.set("slug", slug);
          url.searchParams.set("page", String(page));

          const response = await fetch(url.toString());

          if (!response.ok) {
            throw new Error(`PLP fetch failed: ${response.status}`);
          }

          return response.json();
        };
      }}
    </Script>
  );
};

export default PLPServerClient;
