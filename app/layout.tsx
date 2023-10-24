import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  './globals.css'
import footer from"../layout/partials/Footer"
const inter = Inter({ subsets: ['latin'] });
import config from "../app/config/config.json";
import theme from "../app/config/theme.json";
import TwSizeIndicator from "../layout/helpers/TwSizeIndicator";
import Footer from "../layout/partials/Footer";
import Providers from "../layout/partials/Providers";
import {NextProviders} from"../app/providers";
import Header from"../layout/partials/Header";
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
        <NextProviders>
       <Providers>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </Providers>
        </NextProviders>
      </body>
      </html>
  )
}
