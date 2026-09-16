"use client";

import Script from "next/script";

export function TrackingScripts() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const callRailId = process.env.NEXT_PUBLIC_CALLRAIL_ACCOUNT_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "${ga4Id}", { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel (Facebook / Zeely) */}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,"script",
            "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "${metaPixelId}");
            fbq("track", "PageView");
          `}
        </Script>
      )}

      {/* CallRail Dynamic Number Insertion */}
      {callRailId && (
        <Script
          id="callrail-init"
          src={`//cdn.callrail.com/companies/${callRailId}/12/swap.js`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
