import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

const CharacterDisplay = ({ name, link }) => {
  const { data: characterData, loading, errorMessage } = useFetch(link);

  return (
    <div>
      {loading && (
        <h3
          style={{
            color: 'white',
            fontFamily: 'Bangers',
            fontSize: '25px',
            letterSpacing: '2px',
          }}
        >
          Loading ..{' '}
        </h3>
      )}
      {errorMessage && <h3>{errorMessage}</h3>}

      <Link to={characterData && `/characters/${characterData.results.id}`}>
        <p className="characters-name">{name}</p>
        {characterData && (
          <img
            className="characters-img"
            src={characterData.results.image.super_url}
            alt=""
          />
        )}
      </Link>
      {characterData && <LikeButton id={characterData.results.id} />}
    </div>
  );
};

export default CharacterDisplay;
