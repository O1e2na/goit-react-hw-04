// src/components/ImageGallery/ImageGallery.jsx
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image.urls.regular)} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
