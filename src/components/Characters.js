import { line } from 'p5';
import { useEffect } from 'react';
import useFetch from '../useFetch';

const Characters = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch(
    'https://comicvine.gamespot.com/api/volume/4050-796/?api_key=8cf3fa2bf32f7ac2d20c56da226384e401d78a15&format=json',
  );

  return (
    <div>
      <h2>Homepage</h2>
      {loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {batmanVolumeData && (
        <p>
          {batmanVolumeData.results.characters.map((char) => (
            <li key={char.id}>{char.name}</li>
          ))}
        </p>
      )}
    </div>
  );
};

export default Characters;
