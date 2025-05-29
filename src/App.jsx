import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { Toaster } from 'react-hot-toast';
import Unsplash from './api/unsplash.js';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('cats');
  const search = (value) => {
    setSearchTerm(value);
    setPage(1);
  };
  useEffect(() => {
    if (!searchTerm) return;

    (async () => {
      setIsLoading(true);
      try {
        const response = await Unsplash.search(searchTerm, page);
        setImages((images) => (page > 1 ? [...images, ...response.results] : response.results));
        setTotalPages(response.total_pages);
      } catch (error) {
        setError(error);
        setImages([]);
        setTotalPages(0);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, searchTerm]);

  return (
    <main>
      <Toaster />
      <SearchBar onSubmit={search} />
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages &&
        (isLoading ? <Loader size={100} /> : <LoadMoreBtn onClick={() => setPage(page + 1)} />)}
    </main>
  );
};

export default App;
