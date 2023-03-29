import { createContext, useContext, useState } from 'react';

export const MyContext = createContext({ favorites1: [1] });

export const useMyContext = () => useContext(MyContext);

export const ProviderContext = ({ children }) => {
  const [favorites, setFavotires] = useState([0]);

  const counterReducer = product => {
    setFavotires(prevState => [...prevState, product]);
  };
  console.log(favorites, 'MyContext');
  console.log(useMyContext, 'ContextReal');

  return (
    <MyContext.Provider value={{ counterReducer, favorites }}>
      {children}
    </MyContext.Provider>
  );
};
