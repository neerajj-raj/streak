const wpBaseUrl = process?.env?.WP_BASE_URL ?? "";
const fbDomainVerificationId = process?.env?.FB_DOMAIN_VERIFICATION_ID ?? "";
const gtmId = process?.env?.GTM_ID ?? "";
const fbPixelId = process?.env?.FB_PIXEL_ID ?? "";
const gtagId = process?.env?.GT_TAG_ID ?? "";

export {
  gtagId,
  gtmId,
  wpBaseUrl,
  fbPixelId,
  fbDomainVerificationId,
}