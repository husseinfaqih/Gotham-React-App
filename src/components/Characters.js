import { useState } from 'react';
import useFetch from '../useFetch';
import CharacterDisplay from './CharacterDisplay';

const Characters = () => {
  const [visible, setVisible] = useState(9);

  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  return (
    <div className="characters-container">
      <h2 className="home-title">Here you will find Everyone</h2>

      {loading && (
        <div className="home-container">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2M2NDU0ZDM5MDNmZWZjZWQ4ZmNiNzc4ZDYwNDczZmNjNzFjMTlmZiZjdD1n/8fbeFbshnfyJW/giphy.gif"
            alt="Loading..."
          />
          <p className="home-mini-title">
            The Dark Knight is always on the move. Please wait a moment.
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
        <div className="characters-list">
          {batmanVolumeData.results.characters.slice(0, visible).map((char) => (
            <div className="characters-item" key={char.id}>
              <CharacterDisplay name={char.name} link={char.api_detail_url} />
            </div>
          ))}
        </div>
      )}
      <button
        className="load-more"
        onClick={() => setVisible((previousValue) => previousValue + 9)}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default Characters;
