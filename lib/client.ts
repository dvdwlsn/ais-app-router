import { createMemoryCache } from '@algolia/client-common';
import { liteClient as algoliasearch } from 'algoliasearch/lite';

/**
 * Algolia search client configuration
 * Uses a memory cache to improve performance by caching search responses
 */
const responsesCache = createMemoryCache();

export const client = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
  { responsesCache }
);
