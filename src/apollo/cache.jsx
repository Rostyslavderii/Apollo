import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { GET_ROCKET_ITEMS, GET_ROCKET } from './apolloAPI';
import { useEffect } from 'react';
//import { AsyncStorage } from 'react-native';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

export const cartItemsVar = makeVar([]);

console.log(cartItemsVar(), 'cache');

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return JSON.parse(JSON.stringify(cartItemsVar()));
          },
        },
      },
    },
  },
});

persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

console.log(
  persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  })
);

window.addEventListener('storage', () => {
  console.log('storage has changed');
});
