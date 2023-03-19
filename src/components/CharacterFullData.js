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
      {characterFullData && <div> {characterFullData.results.name}</div>}
      {characterFullData && (
        <img src={characterFullData.results.image.thumb_url} alt="" />
      )}
      {characterFullData && <div> {characterFullData.results.birth}</div>}
      {characterFullData && (
        <div> Real Name: {characterFullData.results.real_name}</div>
      )}

      {characterFullData && <div> {characterFullData.results.deck}</div>}
      {/* {characterFullData && (
        <div>
          {characterFullData.results.powers.map((power) => (
            <p>{power.name}</p>
          ))}
        </div>
      )} */}
    </>
  );
};

export default CharacterFullData;
