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

interface AppHeadProps {
  data: {
    meta_title: string;
    meta_description: string;
    canonical_url: string;
  };
}

const AppHead = (props: AppHeadProps) => {
  const { meta_title, meta_description, canonical_url } = props?.data || {};

  // IMPORTANT: absolute URL for social previews
  const ogImage = `${canonical_url}/wp-content/uploads/2023/12/OSCAR-LOGO-2.png`;

  return (
    <>
      {/* Basic */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />

      {/* Robots */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      {/* Canonical */}
      <link rel="canonical" href={canonical_url} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:url" content={canonical_url} />
      <meta property="og:site_name" content="Oscar Luxury" />

      {/* 🔥 REQUIRED FOR IMAGE PREVIEW */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Oscar Luxury Logo" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta_title} />
      <meta name="twitter:description" content={meta_description} />
      <meta name="twitter:image" content={ogImage} />

      {/* PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E7F3E3" />
      <meta name="application-name" content="Oscar Luxury" />
      <meta name="apple-mobile-web-app-title" content="Oscar Luxury" />

      {/* Icons */}
      <link rel="icon" sizes="144x144" href="/images/favicon/mstile-144x144.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon.ico" />

      <meta name="next-head-count" content="23" />

      {/* Styles */}
      <link rel="stylesheet" href="/styles/tailwind.css" />
    </>
  );
};

export default AppHead;
