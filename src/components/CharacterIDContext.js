import { createContext, useState } from 'react';

export const CharacterIDContext = createContext();

export const CharacterIDProvider = (props) => {
  const [favorite, setFavorite] = useState([]);
  console.log(favorite);

  return (
    <CharacterIDContext.Provider value={{ favorite, setFavorite }}>
      {props.children}
    </CharacterIDContext.Provider>
  );
};
