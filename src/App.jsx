import { useEffect, useState } from 'react';

const App = () => {
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  return (
    <main>
      <pre>
        <code>{key}</code>
      </pre>
    </main>
  );
};

export default App;
