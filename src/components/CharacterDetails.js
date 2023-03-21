import { useParams } from 'react-router-dom';
import useFetchFilter from '../useFetchFilter';
import CharacterFullData from './CharacterFullData';

const CharacterDetails = () => {
  const { id } = useParams();
  const {
    data: characterDataId,
    loading,
    errorMessage,
  } = useFetchFilter('https://comicvine.gamespot.com/api/characters/', id);

  return (
    <div className="characters-container">
      <h2 className="home-title">Character Details</h2>

      {loading && (
        <div className="home-container">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTVkYjc4MDYwYjQ0NmZlZDI5YTRiNGU3M2YzZmM0MjI5N2Y0MmQyNyZjdD1n/1teOqjFesoFGM/giphy.gif"
            alt="Loading..."
          />
          <p className="home-mini-title">
            "The Batmobile is revving up. We'll be with you shortly."
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
      {characterDataId && (
        <CharacterFullData
          name={characterDataId.results[0].name}
          apiDetailUrl={characterDataId.results[0].api_detail_url}
        />
      )}
    </div>
  );
};

export default CharacterDetails;
