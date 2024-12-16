import "./FavoriteButton.css";
import { useState } from 'react';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const FavoriteButton = ({ bookingId, isFavorite, onFavoriteToggle }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
    onFavoriteToggle(bookingId, !favorite);
  };

 return (
    <button
      className={`favorite-btn ${favorite ? 'active' : '' }`}
      onClick={handleFavoriteToggle}
    >
      <FavoriteBorderOutlinedIcon className="w-5 h-5" />
    </button>
  );
};

export default FavoriteButton;