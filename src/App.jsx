import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { Toaster } from 'react-hot-toast';
import Unsplash from './api/unsplash.js';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      {images.length ? (
        <ImageGallery
          images={images}
          onImageClick={(image) => {
            setSelectedImage(image);
            setIsModalOpen(true);
          }}
        />
      ) : (
        <p>We have nothing here yet</p>
      )}
      {page < totalPages &&
        (isLoading ? <Loader size={100} /> : <LoadMoreBtn onClick={() => setPage(page + 1)} />)}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default App;
