import React from 'react';
import Search from './Search';

/**
 * Force dynamic rendering to ensure fresh search results
 * This prevents static generation and ensures the page is rendered on each request
 */
export const dynamic = 'force-dynamic';

/**
 * Category page - displays products filtered by a specific category
 * The category is passed from the dynamic route segment [category]
 */
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return <Search category={category} />;
}
