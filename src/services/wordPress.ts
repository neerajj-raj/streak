import { mockEnabled, wpBaseUrl } from "utils/config";
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
        console.info(`[fetchFromWordPress: ${new Date()}] HTTP error! Status: ${response?.status}`)
      }

    } catch (error) {
      console.error(`[fetchFromWordPress] Error: ${error}`);
    }
  }
  return mockResponse(mockType);
}

export const getCommonContents = async () => {
  return await fetchFromWordPress("/wp-json/v1/common/contents", "common");
}

export const getPageContentBySlug = async (slug: string) => {
  return await fetchFromWordPress(`/wp-json/wp/v2/pages?slug=${slug}`, slug);
}