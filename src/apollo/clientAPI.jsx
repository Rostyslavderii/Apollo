import { ApolloClient, InMemoryCache } from '@apollo/client';
import { cache } from './cache';

export const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: cache,
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy(currentFetchPolicy) {
        if (
          currentFetchPolicy === 'network-only' ||
          currentFetchPolicy === 'cache-and-network'
        ) {
          return 'cache-first';
        }
        return currentFetchPolicy;
      },
    },
  },
});
