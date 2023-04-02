import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { GET_ROCKET_ITEMS, GET_ROCKET } from './apolloAPI';
//import { AsyncStorage } from 'react-native';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

export const cartItemsVar = makeVar([0]);
console.log(cartItemsVar(), 'cache');

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read(_, { readField }) {
            const cardId = readField('id');
            return cartItemsVar().includes(cardId);
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
