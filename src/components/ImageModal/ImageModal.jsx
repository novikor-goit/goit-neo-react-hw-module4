import css from './ImageModal.module.css';

import Modal from 'react-modal';
import Loader from '../Loader/Loader.jsx';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    padding: '0',
    border: 'none',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

export default function ImageModal({
  image: {
    urls: { regular: src },
    links: { html: link },
    alt_description: alt,
    width,
    height,
    description,
    user: { name: author }
  },
  isOpen,
  onClose
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image preview"
      style={customStyles}>
      <div className={css.modalContent}>
        <a href={link} target="_blank" rel="noreferrer" className={css.modalLink}>
          <p className={css.modalInfo}>Author: {author}</p>
          {description && <p className={css.modalInfo}>{description}</p>}
          <img src={src} alt={alt} className={css.modalImage} />
        </a>
        <p className={css.modalInfo}>
          {width}×{height}
        </p>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
}
