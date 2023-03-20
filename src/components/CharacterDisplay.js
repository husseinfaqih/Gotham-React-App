import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

const CharacterDisplay = ({ name, link }) => {
  const { data: characterData, loading, errorMessage } = useFetch(link);

  return (
    <div>
      <p>{name}</p>
      {loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {characterData && <LikeButton id={characterData.results.id} />}
      <Link to={characterData && `/characters/${characterData.results.id}`}>
        {characterData && (
          <img src={characterData.results.image.thumb_url} alt="" />
        )}
      </Link>
    </div>
  );
};

export default CharacterDisplay;
