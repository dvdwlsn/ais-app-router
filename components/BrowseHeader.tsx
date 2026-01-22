'use client';

import Link from 'next/link';
import React from 'react';
import { CategoryDropdown } from '@/components/CategoryDropdown';

type BrowseHeaderProps = {
  currentCategory?: string;
};

/**
 * Header component for search/browse pages
 * Displays category dropdown and optional "All Products" link
 */
export function BrowseHeader({ currentCategory }: BrowseHeaderProps) {
  return (
    <div className="browse-header">
      <div className="browse-header-content">
        {currentCategory && (
          <Link href="/" className="home-button-header">
            ← All Products
          </Link>
        )}
        <div className="browse-header-dropdown">
          <CategoryDropdown currentCategory={currentCategory} />
        </div>
      </div>
    </div>
  );
}
