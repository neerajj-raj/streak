import { wpBaseUrl } from "utils/config";

export const getCommonContents = async () => {
  const response = await fetch(`${wpBaseUrl}/wp-json/v1/common/contents`);
  return response;
}

export const getPageContentBySlug = async (slug: string) => {
  const response = await fetch(`${wpBaseUrl}/wp-json/wp/v2/pages?slug=${slug}`);
  return response;
}