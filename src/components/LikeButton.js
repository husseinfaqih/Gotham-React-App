import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext, useEffect, useState } from 'react';

const LikeButton = ({ id }) => {
  const [fillIcon, setFillIcon] = useState(false);
  const { favorite, setFavorite } = useContext(CharacterIDContext);

  const likeIcon = () => {
    if (!fillIcon) {
      setFillIcon(true);
      setFavorite([...new Set([...favorite, id])]);
    } else {
      setFillIcon(false);
      setFavorite(favorite.filter((x) => x !== id));
    }
  };

  const checkLikes = () => {
    favorite.forEach((CharId) => {
      if (CharId === id) {
        setFillIcon(true);
      }
    });
  };

  useEffect(checkLikes, []);

  return (
    <div>
      {!fillIcon && (
        <AiOutlineLike
          onClick={() => {
            likeIcon();
          }}
        />
      )}
      {fillIcon && (
        <AiFillLike
          onClick={() => {
            likeIcon();
          }}
        />
      )}
    </div>
  );
};

export default LikeButton;
