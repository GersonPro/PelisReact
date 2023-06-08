import React, { useState, useRef, useEffect } from 'react';

export default function MovieSearch() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para buscar películas con el término de búsqueda (searchTerm)
    console.log('Buscar películas con:', searchTerm);
  };

  return (
    <div ref={searchRef}>
      {!searchActive && (
        <button onClick={handleSearchClick}>Buscar</button>
      )}
      {searchActive && (
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar películas"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Buscar</button>
        </form>
      )}
    </div>
  );
}
