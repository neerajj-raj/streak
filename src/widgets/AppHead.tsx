import { Script } from "streak/components";
import { fbDomainVerificationId, gtmId, fbPixelId, gtagId } from "utils/config";
import { GTM_LAYER_NAME } from "utils/constants";

interface AppHeadProps {
  data: {
    title: string;
    description: string;
    authorName: string;
    permalinkFormat: string;
    facebookTitle: string;
    facebookDescription: string;
    focusKeywords: string;
    facebookImage: string;
    modifiedDate: string;
    publishedDate: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    siteFavIcon: string;
    parentDomain: string;
  }
}

const AppHead = (props: AppHeadProps) => {
  const {
    title,
    description,
    authorName,
    permalinkFormat,
    facebookTitle,
    facebookDescription,
    focusKeywords,
    facebookImage,
    modifiedDate,
    publishedDate,
    twitterTitle,
    twitterDescription,
    twitterImage,
    siteFavIcon,
    parentDomain,
  } = props?.data || {};

  const loadGtmScript = () => (
    <Script
      id="gtm-partner"
      options={{
        gly: GTM_LAYER_NAME,
        gtmId: gtmId,
      }}
    >
      {(gDom: any, options: any) => {
        const gly = options?.gly;
        const gtmId = options.gtmId;
        gDom[gly] = [];

        gDom._s_gtmKey = gtmId;

        gDom[gly] = gDom[gly] || [];
        // GTM Push after delay
        gDom[gly].push({ "gtm.start": gDom._s_time, event: "gtm.js" });

        gDom.pGtm = function () {
          return gDom[gly].push(...arguments);
        };
      }}
    </Script>
  );

  const loadFbPixelScript = () => (
    <Script id="meta-pixel" options={{ fbPixelId }}>
      {(gDom: any, options: any) => {
        const fbPixelId = options.fbPixelId;
        if (gDom.fbq) return; // Already loaded

        const fbq = function (...args: any[]) {
          if ((fbq as any).callMethod) {
            (fbq as any).callMethod.apply(fbq, args);
          } else {
            (fbq as any).queue.push(args);
          }
        };

        // Attach properties
        (fbq as any).push = fbq;
        (fbq as any).loaded = true;
        (fbq as any).version = "2.0";
        (fbq as any).queue = [];

        gDom.fbq = fbq;
        gDom._fbq = fbq;
        gDom._fbPixelId = fbPixelId;
      }}
    </Script>
  );

  const loadGtScript = () => (
    <Script id="gt-tag" options={{ gtagId, parentDomain  }}>
      {(gDom: any, options: any) => {
        // Initialize dataLayer
        gDom.dataLayer = gDom.dataLayer || [];

        // Define gtag function
        gDom.gtag = function (...args: any[]) {
          gDom.dataLayer!.push(args);
        };

        // Base configuration (matches your original inline script)
        gDom.gtag("js", new Date());
        gDom.gtag("set", "linker", { domains: [options?.parentDomain] });
        gDom.gtag("set", "developer_id.dZTNiMT", true);
        gDom.gtag("config", options?.gtagId);
      }}
    </Script>
  );


  const loadStructuredSchema = () => (
    <script
      type="application/ld+json"
      className="rank-math-schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://loremwellnesscare.com/#organization",
              name: "lorem wellness care",
              url: "https://loremwellnesscare.com",
            },
            {
              "@type": "WebSite",
              "@id": "https://loremwellnesscare.com/#website",
              url: "https://loremwellnesscare.com",
              name: "lorem wellness care",
              publisher: {
                "@id": "https://loremwellnesscare.com/#organization",
              },
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://loremwellnesscare.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "ImageObject",
              "@id":
                { facebookImage },
              url: { facebookImage },
              width: "1280",
              height: "650",
              caption: "Accent modification",
              inLanguage: "en-US",
            },
            {
              "@type": "WebPage",
              "@id": "https://loremwellnesscare.com/#webpage",
              url: "https://loremwellnesscare.com/",
              name: "Lorem Wellness Care | Comprehensive Child Development and Rehabilitation Services in Kochi",
              datePublished: "2024-08-05T09:55:04+00:00",
              dateModified: "2025-01-30T13:39:13+00:00",
              about: { "@id": "https://loremwellnesscare.com/#organization" },
              isPartOf: { "@id": "https://loremwellnesscare.com/#website" },
              primaryImageOfPage: {
                "@id":
                  { facebookImage },
              },
              inLanguage: "en-US",
            },
            {
              "@type": "Person",
              "@id": "https://loremwellnesscare.com/author/adminlorem/",
              name: "Admin@Lorem",
              url: "https://loremwellnesscare.com/author/adminlorem/",
              image: {
                "@type": "ImageObject",
                "@id":
                  "https://secure.gravatar.com/avatar/2c6846968be863613c99c85d721854dea69b272f64f9c5940ada7ca9e85fa383?s=96&d=mm&r=g",
                url: "https://secure.gravatar.com/avatar/2c6846968be863613c99c85d721854dea69b272f64f9c5940ada7ca9e85fa383?s=96&d=mm&r=g",
                caption: "Admin@Lorem",
                inLanguage: "en-US",
              },
              sameAs: ["http://loremwellnesscare.com"],
              worksFor: {
                "@id": "https://loremwellnesscare.com/#organization",
              },
            },
            {
              "@type": "Article",
              headline:
                "Lorem Wellness Care | Comprehensive Child Development and Rehabilitation Services in Kochi",
              keywords: "Lorem Wellness Care",
              datePublished: "2024-08-05T09:55:04+00:00",
              dateModified: "2025-01-30T13:39:13+00:00",
              author: {
                "@id": "https://loremwellnesscare.com/author/adminlorem/",
                name: "Admin@Lorem",
              },
              publisher: {
                "@id": "https://loremwellnesscare.com/#organization",
              },
              description:
                "At Lorem Wellness Care in Kochi, we specialize in child development, women's wellness, mental health care, and rehabilitation for orthopedic and neurological conditions. Our multidisciplinary team offers personalized therapies including speech therapy, physiotherapy, occupational therapy, and special education to enhance your well-being.",
              name: "Lorem Wellness Care | Comprehensive Child Development and Rehabilitation Services in Kochi",
              "@id": "https://loremwellnesscare.com/#richSnippet",
              isPartOf: { "@id": "https://loremwellnesscare.com/#webpage" },
              image: {
                "@id":
                  { facebookImage },
              },
              inLanguage: "en-US",
              mainEntityOfPage: {
                "@id": "https://loremwellnesscare.com/#webpage",
              },
            },
          ],
        }),
      }}
    />
  )

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={permalinkFormat} />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={facebookTitle} />
      <meta property="og:description" content={facebookDescription} />
      <meta property="og:url" content={permalinkFormat} />
      <meta property="og:site_name" content={focusKeywords} />
      <meta property="og:updated_time" content={modifiedDate} />

      {/* Open Graph Image */}
      <meta property="og:image" content={facebookImage} />
      <meta property="og:image:secure_url" content={facebookImage} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="650" />
      <meta property="og:image:alt" content="Accent modification" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Article Metadata */}
      <meta property="article:published_time" content={publishedDate} />
      <meta property="article:modified_time" content={modifiedDate} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || facebookTitle} />
      <meta name="twitter:description" content={twitterDescription || facebookDescription} />
      <meta name="twitter:image" content={twitterImage || facebookImage} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={authorName} />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="Less than a minute" />

      <link rel="shortlink" href={permalinkFormat} />
      <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://loremwellnesscare.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Floremwellnesscare.com%2F" />
      <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://loremwellnesscare.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Floremwellnesscare.com%2F&amp;format=xml" />
      <meta name="generator" content="Site Kit by Google 1.144.0" />

      <link rel="icon" href={siteFavIcon} sizes="32x32" />
      <link rel="icon" href={siteFavIcon} sizes="192x192" />
      <link rel="apple-touch-icon" href={siteFavIcon} />
      <meta name="msapplication-TileImage" content={siteFavIcon} />

      {fbDomainVerificationId && <meta name="facebook-domain-verification" content={fbDomainVerificationId} />}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="author" content={authorName} />
      <title>{title}</title>

      {/* CSS */}
      {/* <link rel="stylesheet" href="/styles/fonts.css" /> */}
      <link rel="stylesheet" href="/styles/aos.css" />
      <link rel="stylesheet" href="/styles/global.css" />
      <link rel="stylesheet" href="/styles/menu.css" />
      <link rel="stylesheet" href="/styles/mobile.css" />
      <link rel="stylesheet" href="/styles/flickity.css" />

      {/* GTM Insight Tag */}
      {gtmId && loadGtmScript()}

      {/* FB Meta Tag */}
      {fbPixelId && loadFbPixelScript()}

      {/* GT Meta Tag */}
      {gtagId && loadGtScript()}

      {/* JSON-LD Schema */}
      {loadStructuredSchema()}

      {/* No script tags */}
      {/* Google Tag Manager */}
      {gtmId && <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        >
        </iframe>
      </noscript>}

      {/* FB Meta Tag */}
      {fbPixelId && <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>}
    </>
  )
}

export default AppHead;