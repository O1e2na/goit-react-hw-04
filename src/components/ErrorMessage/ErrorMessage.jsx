// src/components/ErrorMessage/ErrorMessage.jsx
import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return <p>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
