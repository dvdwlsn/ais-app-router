'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CATEGORIES } from '@/lib/constants';

type CategoryDropdownProps = {
  currentCategory?: string;
};

/**
 * Category selection dropdown component
 * Allows users to navigate between different product categories
 */
export function CategoryDropdown({ currentCategory }: CategoryDropdownProps) {
  const router = useRouter();
  
  /**
   * Track mount state to prevent hydration mismatches
   * The dropdown value depends on URL state which isn't available during SSR
   */
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      router.push('/');
    } else {
      router.push(`/${encodeURIComponent(value)}`);
    }
  };

  /**
   * Render static placeholder during SSR to prevent hydration mismatch
   * This ensures the server and client HTML match on initial render
   */
  if (!isMounted) {
    return (
      <div className="category-dropdown-wrapper">
        <label htmlFor="category-select" className="category-dropdown-label">
          Browse by Category:
        </label>
        <select
          id="category-select"
          value="all"
          className="category-dropdown-select"
          disabled
        >
          <option value="all">All Products</option>
        </select>
      </div>
    );
  }

  return (
    <div className="category-dropdown-wrapper">
      <label htmlFor="category-select" className="category-dropdown-label">
        Browse by Category:
      </label>
      <select
        id="category-select"
        value={currentCategory || 'all'}
        onChange={handleCategoryChange}
        className="category-dropdown-select"
      >
        <option value="all">All Products</option>
        {CATEGORIES.sort((a, b) => a.value.localeCompare(b.value)).map((item) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
