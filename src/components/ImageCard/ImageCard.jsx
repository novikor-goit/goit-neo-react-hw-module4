import css from './ImageCard.module.css';

export default function ImageCard({
  image: {
    urls: { small: src },
    alt_description
  },
  onClick
}) {
  return (
    <div className={css.card} onClick={onClick}>
      <img src={src} alt={alt_description} />
    </div>
  );
}
