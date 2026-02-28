import type { ReactNode } from 'react'
import './globals.css'
import { Nav, Footer } from './components'

export const metadata = {
  title: 'Sophisticated Social — by Emmy Rener',
  description: 'Intentional social strategy, content, and campaigns for founder-led brands ready to scale across the globe.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
<body suppressHydrationWarning>
        <Nav />
        <main style={{ paddingTop: '68px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}