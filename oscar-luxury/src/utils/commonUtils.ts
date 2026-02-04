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

import { siteUrl } from "./config";

export const hasArrayElements = (arr: any): boolean => {
  return arr && Array.isArray(arr) && arr.length > 0;
};

export const getPageUrl = (slug: string = ""): string => {
  if (!slug) return siteUrl;
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${siteUrl}${normalizedSlug}`;
};

export const isFullUrl = (url: string): boolean => {
  return url?.startsWith("http://") || url?.startsWith("https://");
};

interface MenuItem {
  id: number;
  title: string;
  url: string;
  parent: number;
  order: number;
  children?: MenuItem[];
}

const buildMenuTree = (items: MenuItem[] = []): MenuItem[] => {
  const map = new Map<number, MenuItem>();

  // Initialize map and children arrays
  items.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  const tree: MenuItem[] = [];

  items.forEach((item) => {
    const mappedItem = map.get(item.id)!;

    if (item.parent === 0) {
      tree.push(mappedItem);
    } else {
      const parent = map.get(item.parent);
      if (parent) {
        parent.children!.push(mappedItem);
      }
    }
  });

  // Recursive sort by order
  const sortByOrder = (nodes: MenuItem[]) => {
    nodes.sort((a, b) => a.order - b.order);
    nodes.forEach((node) => {
      if (node.children?.length) {
        sortByOrder(node.children);
      }
    });
  };

  sortByOrder(tree);

  return tree;
};

export const splitMenuItemsBySlug = (menuContents: Array<Record<string, any>>) => {
  const getMenuItemsBySlug = (slug: string) => buildMenuTree(menuContents?.find((menu) => menu.slug === slug)?.items ?? []);

  return {
    headerMenu: getMenuItemsBySlug("header-navigation-menu"),
    inventoryMenu: getMenuItemsBySlug("footer-inventory-menu"),
    footerQuickLinks: getMenuItemsBySlug("footer-quick-links"),
  };
};

export const replaceKeyWordFromTemplate = (keyword: string, template: string, title: string) => {
  return template?.replace(keyword, title) ?? title ?? "";
};

export const getSortedCategories = (cats: Array<Record<string, any>>) => {
  if (hasArrayElements(cats)) {
    return [...cats].sort((a, b) => a.id - b.id);
  }
  return [];
};
