import { useState } from "react";
import Layout from "../layouts/layout-component";
import "./../styles/home.css";
import Card from "./card-component";
import CarouselSection from "./carousel-section";
import InstagramFeed from "./instagram-section";

function Home() {
  const circles = [
    { number: "10K+", text: "Mujeres apoyadas", size: "w-40 h-40" },
    { number: "50+", text: "Programas", size: "w-48 h-48" },
    { number: "20", text: "Años de experiencia", size: "w-44 h-44" },
  ];

  return (
    <Layout>
      <section className="hero__section">
        <div className="hero__content">
          <h1>
            La Fundación Casa de la Mujer está tejiendo sueños y construyendo
            futuros
          </h1>
          <p>Empoderamos a las mujeres para transformar comunidades</p>
          <div className="hero__buttons">
            <button className="btn bg-[#E64A4A] text-white hover:bg-[#e74c3c] border-[#E64A4A]">
              DONAR
            </button>
            <button className="btn btn-outline border-[#E64A4A] text-[#E64A4A] hover:bg-black hover:text-white">
              LEER MÁS
            </button>
          </div>
        </div>
      </section>

      <section className="hero bg-[#663399] min-h-2 p-4">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <div className="hidden lg:block relative w-full lg:w-1/2 h-96">
            {circles.map((circle, index) => (
              <div
                key={index}
                className={`absolute rounded-full bg-[#4ECDC4] flex flex-col items-center justify-center text-primary-content ${
                  circle.size
                } ${getPosition(index)}`}
              >
                <span className="text-3xl font-bold">{circle.number}</span>
                <span className="text-xs text-center">{circle.text}</span>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Quiénes Somos
            </h1>
            <p className="py-6 text-white">
              La Fundación Casa de la Mujer trabaja incansablemente para crear
              un mundo donde cada mujer tenga la oportunidad de alcanzar su
              máximo potencial. A través de programas de educación,
              empoderamiento económico y liderazgo, estamos cambiando vidas y
              comunidades.
            </p>
            <button className="btn bg-[#4ECDC4] hover:bg-[#7EDCD4] text-black">
              Descubre nuestra historia
            </button>
          </div>
        </div>
      </section>

      <section className="carousel-section bg-gray-100 py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Nuestros Proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="h-80 sm:h-96" // Altura fija
              title="Proyecto 1"
              description="Descripción del proyecto 1. Este es un ejemplo de texto."
              imageUrl="https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg"
              badges={["Web", "Diseño"]}
            />
            <Card
              className="h-80 sm:h-96" // Altura fija
              title="Proyecto 2"
              description="Descripción del proyecto 2. Otro ejemplo de texto aquí."
              imageUrl="https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg"
              badges={["App", "Desarrollo"]}
            />
            <Card
              className="h-80 sm:h-96 sm:col-span-2 lg:col-span-1" // Altura fija + span
              title="Proyecto 3"
              description="Descripción del proyecto 3. Un tercer ejemplo de texto."
              imageUrl="https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg"
              badges={["Marketing", "Estrategia"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-section relative w-full h-96 bg-[#FF9B9B] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://s3.amazonaws.com/tc-amdoc-production/media/images/KingCoalStill-1.max-1860x1050.jpg"
            alt="Fondo de la sección"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <div className="bg-black bg-opacity-50 rounded-lg p-8 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">
              Título de la Sección
            </h2>
            <p className="text-xl text-center text-white">
              Este es un texto descriptivo para la sección. Puedes agregar aquí
              cualquier contenido que desees mostrar sobre la imagen de fondo.
            </p>
          </div>  
        </div>
      </section>

      <CarouselSection></CarouselSection>

      <InstagramFeed></InstagramFeed>
    </Layout>
  );
}
// Función auxiliar para posicionar los círculos
const getPosition = (index) => {
  switch (index) {
    case 0:
      return "top-0 left-0";
    case 1:
      return "bottom-0 left-1/4";
    case 2:
      return "top-1/4 right-0";
    default:
      return "";
  }
};
export default Home;
