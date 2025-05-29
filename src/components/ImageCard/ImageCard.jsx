import css from './ImageCard.module.css';

export default function ImageCard({
  image: {
    urls: { small: src },
    alt_description
  }
}) {
  return (
    <div>
      <img src={src} alt={alt_description} />
    </div>
  );
}
