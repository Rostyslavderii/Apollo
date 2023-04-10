import { useState, createContext, useContext } from 'react';

export const cardContext = createContext([null]);

export const MyContext = ({ children }) => {
  const [card, setCard] = useState([]);
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
