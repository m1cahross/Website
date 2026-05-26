import { Poppins } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'The Levitt Lab',
  description: "School is failing you. We won't.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
