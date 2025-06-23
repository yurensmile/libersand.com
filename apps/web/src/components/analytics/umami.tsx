import Script from 'next/script'

export function UmamiAnalytic() {
  return (
    <Script
      async
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
    />
  )
}
