import useFetch from '../useFetch';
import CharacterFullData from './CharacterFullData';

const RandomCharacter = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  return (
    <div className="characters-container">
      <h2 className="home-title">Here is your Random Gotham character</h2>
      <button
        className="reload-random"
        onClick={() => window.location.reload()}
      >
        RELOAD!!!
      </button>
      {loading && (
        <h3
          style={{
            fontFamily: 'Bangers',
            fontSize: '35px',
            letterSpacing: '2px',
            color: 'black',
          }}
        >
          Loading ..
        </h3>
      )}
      {errorMessage && <h3>{errorMessage}</h3>}
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
        </div>
      )}
    </div>
  );
};

export default RandomCharacter;
