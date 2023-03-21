import { CharacterIDContext } from './CharacterIDContext';
import { useContext } from 'react';
import useFetch from '../useFetch';
import CharacterDisplay from './CharacterDisplay';

const Favorite = () => {
  const { favorite } = useContext(CharacterIDContext);
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  const favoriteCharacters = batmanVolumeData?.results.characters.filter(
    (char) => favorite.includes(char.id),
  );

  return (
    <div className="favorite-container">
      <h2 className="home-title">Favorite Characters</h2>
      {loading && (
        <div className="home-container">
          <img
            src="https://media3.giphy.com/media/B4jfJqiIxvU08/giphy.gif?cid=ecf05e47tji3a1czna1nd07eh91d5rci1hgpzl7ihvfybbnv&rid=giphy.gif&ct=g"
            alt="Loading..."
          />
          <p className="home-mini-title">
            "Commissioner Gordon is briefing Batman. Hang tight."
          </p>
        </div>
      )}
      {errorMessage && (
        <div className="home-container">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE5NDBlYzVmNTc1ZmNjZWEyZmI3YmZmYjMzZDRjYTc3OTJiNGU1MSZjdD1n/Sid4QgwDxJ8l2/giphy.gif"
            alt="Loading..."
          />
          <p className="home-mini-title">
            Looks like the Bat-Signal is down. Please try again later.
          </p>
        </div>
      )}
      {batmanVolumeData && (
        <div className="favorites-list">
          {favoriteCharacters.map((char) => (
            <div className="characters-item" key={char.id}>
              <CharacterDisplay name={char.name} link={char.api_detail_url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
