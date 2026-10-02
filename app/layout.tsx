import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://la23casino.vercel.app'),
  title: 'La Casino — официальный сайт онлайн-казино: играть, рабочее зеркало и вход',
  description:
    'La Casino — официальный сайт онлайн-казино. Играть в ла казино онлайн, рабочее зеркало для входа, лицензионные слоты и быстрые выплаты. Регистрация за пару минут.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://la23casino.vercel.app/',
    title: 'La Casino — официальный сайт онлайн-казино',
    description:
      'Играть в La Casino онлайн, рабочее зеркало для входа, лицензионные слоты и быстрые выплаты.',
    siteName: 'La Casino',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Casino — официальный сайт онлайн-казино',
    description:
      'Играть в La Casino онлайн, рабочее зеркало для входа, лицензионные слоты и быстрые выплаты.',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b2e22',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
