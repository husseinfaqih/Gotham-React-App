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
    <div>
      {loading && <h3>Loading .. </h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      {characterDataId && (
        <CharacterFullData
          apiDetailUrl={characterDataId.results[0].api_detail_url}
        />
      )}
      <p>Hello</p>
    </div>
  );
};

export default CharacterDetails;
