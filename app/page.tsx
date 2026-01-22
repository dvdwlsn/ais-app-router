import React from 'react';
import Search from './Search';

/**
 * Force dynamic rendering to ensure fresh search results
 * This prevents static generation and ensures the page is rendered on each request
 */
export const dynamic = 'force-dynamic';

/**
 * Root page - displays all products with search functionality
 */
export default function Page() {
  return <Search />;
}
