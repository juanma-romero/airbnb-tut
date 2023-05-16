import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nuni = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'clone ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nuni.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
