'use client';

import React from 'react';
import { Hits, SearchBox, DynamicWidgets } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { Hit } from '@/components/Hit';
import { BrowseHeader } from '@/components/BrowseHeader';
import { RefinementFallback } from '@/components/RefinementFallback';
import { client } from '@/lib/client';
import { SEARCH_CONFIG } from '@/lib/constants';

/**
 * Root search page component
 * Displays all products with search and filtering capabilities
 */
export default function Search() {
  return (
    <InstantSearchNext
      searchClient={client}
      indexName={SEARCH_CONFIG.indexName}
      routing
      // Insights disabled for this demo - enable for production analytics
      insights={false}
      // Preserve filter state when component unmounts (better UX on navigation)
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <BrowseHeader />

      <div className="Container">
        <div>
          {/* DynamicWidgets automatically renders refinement filters based on index configuration */}
          <DynamicWidgets fallbackComponent={RefinementFallback} />
        </div>
        <div>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearchNext>
  );
}
