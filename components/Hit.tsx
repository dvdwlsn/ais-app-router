import { Hit as AlgoliaHit } from 'instantsearch.js';
import React from 'react';
import { Highlight } from 'react-instantsearch';

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    price: number;
  }>;
};

/**
 * Individual search result/hit component
 * Displays product name with search term highlighting and price
 */
export function Hit({ hit }: HitProps) {
  return (
    <>
      {/* Highlight component automatically highlights matching search terms */}
      <Highlight hit={hit} attribute="name" />
      <span className="Hit-price">${hit.price}</span>
    </>
  );
}
