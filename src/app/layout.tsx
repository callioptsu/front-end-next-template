import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import '@/styles/global.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Front End',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
