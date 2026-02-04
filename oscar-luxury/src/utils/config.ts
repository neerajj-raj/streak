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

const wpBaseUrl = process?.env?.NEXT_PUBLIC_WP_URL ?? "https://oscarluxury.com";
const siteUrl = process?.env?.NEXT_PUBLIC_SITE_URL ?? "https://oscarluxury.com";
const mockEnabled = false;


export { wpBaseUrl, siteUrl, mockEnabled};