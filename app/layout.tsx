import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  '../styles/globals.css'
import footer from"../layout/partials/Footer"

import config from "../app/config/config.json";

import TwSizeIndicator from "../layout/helpers/TwSizeIndicator";
import Footer from "../layout/partials/Footer";
import { Providers } from"../app/providers";
import Navigation from"../app/components/Navigation";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '1963',
  description: 'LandingPage 1963',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" bg-[url('/images/gitter.svg')] bg-repeat"  suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
      
          <Navigation />
          <main className="">{children}</main>
          <Footer />
        
        </Providers>
      </body>
      </html>
  )
}
