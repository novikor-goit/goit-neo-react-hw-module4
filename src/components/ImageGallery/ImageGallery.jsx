import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ images }) {
  return (
    <section>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
            <div>{image.id}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
