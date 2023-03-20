import { createContext, useState, useEffect } from 'react';

export const CharacterIDContext = createContext();

export const CharacterIDProvider = (props) => {
  const [favorite, setFavorite] = useState(() => {
    const localData = localStorage.getItem('favorite');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
    console.log(favorite);
  }, [favorite]);

  return (
    <CharacterIDContext.Provider value={{ favorite, setFavorite }}>
      {props.children}
    </CharacterIDContext.Provider>
  );
};
