import { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import { FC, ReactNode } from 'react';

// const inter = Inter({ subsets: ['latin'] });

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">{children}</div>
  );
}

export const metadata: Metadata = {
  title: 'Top',
  description: 'Top page',
};

export default Layout;
