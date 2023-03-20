import { useReducer } from 'react';
import useFetch from '../useFetch';
import CharacterFullData from './CharacterFullData';

const RandomCharacter = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  return (
    <div>
      <h2>Homepage</h2>

      {loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {batmanVolumeData && (
        <div>
          <CharacterFullData
            apiDetailUrl={
              batmanVolumeData.results.characters[
                Math.floor(
                  Math.random() * batmanVolumeData.results.characters.length,
                )
              ].api_detail_url
            }
          />
          <button onClick={() => window.location.reload()}>RELOAD!!!</button>
        </div>
      )}
    </div>
  );
};

export default RandomCharacter;
