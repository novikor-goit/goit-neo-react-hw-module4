import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === '') {
      toast.error('Please enter the search term');
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="topic"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
