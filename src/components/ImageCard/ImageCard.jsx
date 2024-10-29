// src/components/ImageCard/ImageCard.jsx
import PropTypes from 'prop-types';

function ImageCard({ image, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
