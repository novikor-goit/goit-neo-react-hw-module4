import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <section className={css.gallery}>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
