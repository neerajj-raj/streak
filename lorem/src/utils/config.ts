const wpBaseUrl = process?.env?.SUB_DOMAIN_BASE_URL ?? "";
const fbDomainVerificationId = process?.env?.FB_DOMAIN_VERIFICATION_ID ?? "";
const gtmId = process?.env?.GTM_ID ?? "";
const fbPixelId = process?.env?.FB_PIXEL_ID ?? "";
const gtagId = process?.env?.GT_TAG_ID ?? "";
const siteBaseUrl = process?.env?.SITE_BASE_URL ?? "";
const mockEnabled = false;

export {
  mockEnabled,
  gtagId,
  gtmId,
  wpBaseUrl,
  fbPixelId,
  siteBaseUrl,
  fbDomainVerificationId,
}