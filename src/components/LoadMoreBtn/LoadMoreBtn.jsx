// src/components/LoadMoreBtn/LoadMoreBtn.jsx
import PropTypes from 'prop-types';

function LoadMoreBtn({ onClick }) {
  return <button onClick={onClick}>Load more</button>;
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
