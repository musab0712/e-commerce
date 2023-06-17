
import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MegaMart',
  description: 'Devloped By Musab Hassan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body class="h-full" className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
  )
}
