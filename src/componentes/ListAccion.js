import React, { useEffect, useState } from 'react';
import { getPelisAccion, fetchVideoUrl } from '../Api/Services';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

const ListAccion = () => {
  const [pelisList, setPelisList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const Img = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchData() {
      const pelisData = await getPelisAccion();
      setPelisList(pelisData);
    }

    fetchData();
  }, []);

  const openModal = async (peli) => {
    const videoUrl = await fetchVideoUrl(peli.id);
    peli.videoUrl = videoUrl;
    setSelectedMovie(peli);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='grid grid-rows-3 grid-flow-col gap-4 pt-10 m-2 p-4 container'>
      {pelisList.map((peli) => (
        <React.Fragment key={peli.id}>
          <div>
            <button onClick={() => openModal(peli)}>
            <img src={Img + peli.poster_path} alt={peli.title} className='w-84 rounded-lg' />
            </button>
          </div>
        </React.Fragment>
      ))}
      <Modal isOpen={selectedMovie !== null} onRequestClose={closeModal}>
        {selectedMovie && (
          <div className="mt-14">
            <img src={Img + selectedMovie.poster_path} alt={selectedMovie.title} className='w-28' />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            {selectedMovie.videoUrl && (
              <ReactPlayer url={selectedMovie.videoUrl} controls={true} />
            )}
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ListAccion;
