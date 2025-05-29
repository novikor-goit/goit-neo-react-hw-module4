import css from './ImageModal.module.css';

import Modal from 'react-modal';
import Loader from '../Loader/Loader.jsx';

Modal.setAppElement('#root');

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
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image preview">
      <a href={link} target="_blank" rel="noreferrer">
        <p>Author: {author}</p>
        <p>{description}</p>
        <img src={src} alt={alt} />
      </a>
      <p>
        {width}×{height}
      </p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
