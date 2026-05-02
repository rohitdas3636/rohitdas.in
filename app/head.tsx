/* eslint-disable @next/next/next-script-for-ga */

export default function Head() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HWSNTJYNDT" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWSNTJYNDT');
          `,
        }}
      />
    </>
  );
}
