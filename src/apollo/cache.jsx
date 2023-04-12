import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
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

// window.addEventListener('storage', () => {
//   console.log('storage has changed');
// });
