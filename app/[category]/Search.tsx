'use client';

import React from 'react';
import { Hits, Configure, DynamicWidgets, useInstantSearch } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { Hit } from '@/components/Hit';
import { BrowseHeader } from '@/components/BrowseHeader';
import { RefinementFallback } from '@/components/RefinementFallback';
import { client } from '@/lib/client';
import { SEARCH_CONFIG } from '@/lib/constants';

type SearchProps = {
  category: string;
};

/**
 * Internal component to handle category changes
 * Refreshes the search when the category parameter changes
 * This ensures filters are properly applied when navigating between categories
 */
function CategorySearchRefresh({ category }: { category: string }) {
  const { refresh } = useInstantSearch();
  const prevCategoryRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (prevCategoryRef.current !== category) {
      prevCategoryRef.current = category;
      refresh();
    }
  }, [category, refresh]);

  return null;
}

/**
 * Category-filtered search page component
 * Displays products filtered by a specific category
 */
export default function Search({ category }: SearchProps) {
  const decodedCategory = decodeURIComponent(category);

  return (
    <InstantSearchNext
      searchClient={client}
      indexName={SEARCH_CONFIG.indexName}
      routing
    >
      {/* Configure search parameters for this category */}
      <Configure
        filters={`categories:"${decodedCategory}"`}
        hitsPerPage={SEARCH_CONFIG.hitsPerPage}
        analyticsTags={['browse']}
      />
      <CategorySearchRefresh category={decodedCategory} />

      <BrowseHeader currentCategory={decodedCategory} />

      <div className="Container">
        <div>
          {/* DynamicWidgets automatically renders refinement filters based on index configuration */}
          <DynamicWidgets fallbackComponent={RefinementFallback} />
        </div>
        <div>
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearchNext>
  );
}
