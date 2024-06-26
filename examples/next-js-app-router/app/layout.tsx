import './globals.css';
import { Inter } from 'next/font/google';
import { builder } from '@builder.io/sdk';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
