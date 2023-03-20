import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext, useState } from 'react';

const LikeButton = ({ id }) => {
  const [fillIcon, setFillIcon] = useState(false);
  const { favorite, setFavorite } = useContext(CharacterIDContext);

  const likeIcon = () => {
    if (!fillIcon) {
      setFillIcon(true);
      setFavorite([...favorite, id]);
    } else {
      setFillIcon(false);
      setFavorite(favorite.filter((x) => x !== id));
    }
  };

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
