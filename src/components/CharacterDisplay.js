import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext, useState } from 'react';

const CharacterDisplay = ({ name, link }) => {
  const [icon, setIcon] = useState(false);
  const { favorite, setFavorite } = useContext(CharacterIDContext);

  const likeIcon = () => {
    if (!icon) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };

  const { data: characterData, loading, errorMessage } = useFetch(link);

  return (
    <div>
      <p>{name}</p>

      {!icon && characterData && (
        <AiOutlineLike
          onClick={() => {
            // setFavorite();
            setFavorite([...favorite, characterData.results.id]);
            likeIcon();
          }}
        />
      )}
      {icon && characterData && (
        <AiFillLike
          onClick={() => {
            setFavorite(favorite.filter((x) => x !== characterData.results.id));
            likeIcon();
          }}
        />
      )}

      <Link to={characterData && `/characters/${characterData.results.id}`}>
        {loading && <h3>Loading .. </h3>}
        {Error && <h3>{errorMessage}</h3>}
        {characterData && (
          <img src={characterData.results.image.thumb_url} alt="" />
        )}
      </Link>
    </div>
  );
};

export default CharacterDisplay;
