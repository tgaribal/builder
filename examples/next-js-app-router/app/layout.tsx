import './globals.css';
import { Inter } from 'next/font/google';
import { builder } from '@builder.io/sdk';

const inter = Inter({ subsets: ['latin'] });

// builder.init('1adbd5971dac4273891f273603729777')

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
