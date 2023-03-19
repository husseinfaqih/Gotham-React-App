import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

const CharacterDisplay = ({ name, link }) => {
  const { data: characterData, loading, errorMessage } = useFetch(link);

  return (
    <div>
      <Link to={characterData && `/characters/${characterData.results.id}`}>
        <p>{name}</p>
        {loading && <h3>Loading .. </h3>}
        {Error && <h3>{errorMessage}</h3>}
        {characterData && <p>{characterData.results.deck}</p>}
        {characterData && (
          <img src={characterData.results.image.thumb_url} alt="" />
        )}
      </Link>
    </div>
  );
};

export default CharacterDisplay;
