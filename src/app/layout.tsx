import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List',
  description: 'Todo List Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-slate-800 text-slate-100 container mx-auto p-4 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
 