// src/components/ImageModal/ImageModal.jsx
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ImageModal({ imageUrl, onClose }) {
  return (
    <Modal isOpen={!!imageUrl} onRequestClose={onClose}>
      <img src={imageUrl} alt="Large view" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

ImageModal.propTypes = {
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
