import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Provider from './(Provider)/NextUiProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', })

export const metadata: Metadata = {
  title: 'Young Money',
  description: 'AI Propmt Market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${montserrat.variable}`}>
          <Provider>
            <Toaster position='top-center' reverseOrder={false} />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>

  )
}
