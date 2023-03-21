import useFetch from '../useFetch';
import LikeButton from './LikeButton';

const CharacterFullData = ({ apiDetailUrl, name }) => {
  const {
    data: characterFullData,
    loading,
    errorMessage,
  } = useFetch(apiDetailUrl);

  return (
    <div className="character-detail-container">
      {loading && (
        <h3
          style={{
            fontFamily: 'Bangers',
            fontSize: '35px',
            letterSpacing: '2px',
            color: 'black',
          }}
        >
          Here Comes {name} ..
        </h3>
      )}
      {errorMessage && <h3>{errorMessage}</h3>}
      {characterFullData && (
        <div className="character-detail-left">
          <img
            className="character-detail-image"
            src={characterFullData.results.image.super_url}
            alt=""
          />
        </div>
      )}

      {characterFullData && (
        <div className="character-detail-right">
          <LikeButton id={characterFullData.results.id} />
          <div className="character-detail-name">
            {' '}
            {characterFullData.results.name}
          </div>
          <div className="character-detail-birth">
            {' '}
            {characterFullData.results.birth}
          </div>
          <div className="character-detail-real-name">
            {' '}
            Real Name: {characterFullData.results.real_name}
          </div>
          <div className="character-detail-deck">
            {' '}
            {characterFullData.results.deck}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterFullData;
