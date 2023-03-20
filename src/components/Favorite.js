import { CharacterIDContext } from './CharacterIDContext';
import { useContext } from 'react';
import useFetch from '../useFetch';
import CharacterDisplay from './CharacterDisplay';

const Favorite = () => {
  const { favorite, setFavorite } = useContext(CharacterIDContext);
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  const favoriteCharacters = batmanVolumeData?.results.characters.filter(
    (char) => favorite.includes(char.id),
  );

  return (
    <div>
      <h2>Homepage</h2>

      {loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {batmanVolumeData && (
        <div>
          {favoriteCharacters.map((char) => (
            <div key={char.id}>
              <CharacterDisplay name={char.name} link={char.api_detail_url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
