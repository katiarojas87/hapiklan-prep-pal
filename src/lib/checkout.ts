import { useNavigate } from "@tanstack/react-router";

/**
 * Bundle-aware checkout hand-off for the presale funnel.
 *
 * [WIX HEADLESS — TODO] Orders, inventory, vouchers and customers live on Wix.
 * Replace the body below with the Wix eCommerce headless flow and let Wix host
 * the actual checkout page:
 *
 *   import { checkout as wixCheckout } from "@wix/ecom";
 *   import { redirects } from "@wix/redirects";
 *
 *   const { checkoutId } = await wixCheckout.createCheckout({
 *     channelType: wixCheckout.ChannelType.WEB,
 *     lineItems: [{
 *       catalogReference: {
 *         appId: WIX_STORES_APP_ID,
 *         catalogItemId: HAPIKLAN_PRODUCT_ID,
 *         options: { variantId: BUNDLE_VARIANT_IDS[bundleId] }, // pack size = Wix variant
 *       },
 *       quantity: 1,
 *     }],
 *   });
 *   const { redirectSession } = await redirects.createRedirectSession({
 *     ecomCheckout: { checkoutId },
 *     callbacks: { postFlowUrl: `${location.origin}/merci` },
 *   });
 *   location.assign(redirectSession.fullUrl); // Wix-hosted checkout
 *
 * Until the Wix connector is wired, we hand off to the interim Supabase
 * checkout route so the funnel stays testable end to end.
 */
export function useCheckout() {
  const navigate = useNavigate();
  return (bundleId: string) => {
    navigate({ to: "/checkout", search: { pack: bundleId } });
  };
}
