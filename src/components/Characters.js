import { useEffect, useState } from 'react';
import useFetch from '../useFetch';
import CharacterDisplay from './CharacterDisplay';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext } from 'react';

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
            <div key={char.id}>
              <CharacterDisplay name={char.name} link={char.api_detail_url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
