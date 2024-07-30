import React, { useState } from 'react';

const slides = [
  {
    id: 'slide1',
    title: 'Título del Proyecto 1',
    description: 'Esta es una descripción breve del primer proyecto. Aquí puedes detallar los aspectos más importantes o interesantes de tu trabajo.',
    imageUrl: 'https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg',
  },
  {
    id: 'slide2',
    title: 'Título del Proyecto 2',
    description: 'Aquí va la descripción del segundo proyecto. Puedes hablar sobre los desafíos superados o las tecnologías utilizadas.',
    imageUrl: 'https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg',
  },
  {
    id: 'slide3',
    title: 'Título del Proyecto 3',
    description: 'La descripción del tercer proyecto va aquí. Aprovecha este espacio para destacar los logros o características únicas de este trabajo.',
    imageUrl: 'https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg',
  },
];

function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Nuestros Colaboradores
        </h2>
        <div className="carousel w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between w-full p-4 lg:p-8">
                <div className="lg:w-1/2 mb-4 lg:mb-0 lg:ml-12 ">
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    {slide.title}
                  </h3>
                  <p className="text-black" >
                    {slide.description}
                  </p>
                </div>
                <div className="avatar lg:mr-12">
                  <div className="w-56 h-56 lg:w-96 lg:h-96 rounded-full ring ring-[#FF6B6B] ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img
                      src={slide.imageUrl}
                      alt={`Avatar ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={handlePrevClick} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={handleNextClick} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
