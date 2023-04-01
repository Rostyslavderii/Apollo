import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

export const cartItemsVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});
