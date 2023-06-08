import React, { useEffect, useState } from 'react';
import { getPelisInfo, fetchVideoUrl } from '../Api/Services';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography, Button } from "@material-tailwind/react";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

const carouselStyle = {
  width: '2080px',
  height: '600px',
};

export default function Example() {
  const [pelisList, setPelisList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const Img = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchData() {
      const pelisData = await getPelisInfo();
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

  const displayedPelis = pelisList.slice(0, 20).filter(peli => peli); // Filtrar elementos vacíos

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {displayedPelis.map((peli, index) => (
          <React.Fragment key={peli.id}>
            <div className={`relative h-full w-full item-${index + 1}`}>
              <img
                src={Img + peli.poster_path}
                alt={peli.title}
                style={carouselStyle}
                className="object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black bg-opacity-50">
                <div className="w-3/4 text-left md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl text-slate-50"
                  >
                    {peli.title}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 text-slate-50"
                  >
                    {peli.overview}
                  </Typography>
                  <div className="flex text-left gap-2">
                    <Button
                      onClick={() => openModal(peli)}
                      variant="gradient"
                      size="sm"
                      className={`hidden lg:inline-block bg-gradient-to-r from-blue-950 to-gray-950 text-gray-200 item-${index + 1}`}
                    >
                      Ver Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </Carousel>

      <Modal isOpen={selectedMovie !== null} onRequestClose={closeModal}>
        {selectedMovie && (
          <div className="mt-14">
            <img src={Img + selectedMovie.poster_path} alt={selectedMovie.title} className="w-28" />
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
}
