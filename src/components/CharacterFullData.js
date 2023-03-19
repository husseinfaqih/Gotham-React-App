import useFetch from '../useFetch';

const CharacterFullData = ({ apiDetailUrl }) => {
  const {
    data: characterFullData,
    loading,
    errorMessage,
  } = useFetch(apiDetailUrl);

  return (
    <>
      {loading && <h3>Loading .. </h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      {characterFullData && <div> {characterFullData.results.birth}</div>}
    </>
  );
};

export default CharacterFullData;
