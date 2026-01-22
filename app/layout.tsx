import './globals.css';
import 'instantsearch.css/themes/satellite-min.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Product Search - Browse & Discover',
  description: 'Search and browse products across multiple categories with instant results',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
