import { line } from 'p5';
import { useEffect } from 'react';
import useFetch from '../useFetch';
import CharacterDisplay from './CharacterDisplay';

const Characters = () => {
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
          {batmanVolumeData.results.characters.slice(0, 20).map((char) => (
            <CharacterDisplay
              key={char.id}
              name={char.name}
              link={char.api_detail_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
