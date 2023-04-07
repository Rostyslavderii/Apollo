import { useState, createContext } from 'react';

export const cardContext = createContext([null]);

export const MyContext = ({ children }) => {
  const [card, setCard] = useState([null]);
  console.log(card, 'context');
  console.log(setCard, 'setcontext');
  const getCard = cardId => {
    setCard(prev => [...prev, cardId]);
  };

  const value = { card, getCard };

  return (
    <>
      <cardContext.Provider value={value}>{children}</cardContext.Provider>
    </>
  );
};
