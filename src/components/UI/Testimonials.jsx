import React, { useState } from 'react';

// Sample data for testimonials
const testimonials = [
  {
    quote: "Trabajar con Brenda ha sido una experiencia transformadora para nuestra familia. Como padres que luchaban por entender los desafíos de comportamiento únicos de nuestro hijo, la orientación de Brenda fue invaluable. Nos ayudó a abordar a nuestro hijo con más empatía y estrategias efectivas, lo que llevó a una notable mejora en el ambiente de nuestro hogar y en la felicidad de nuestro hijo.",
    author: "Emily R.",
  },
  {
    quote: "La experiencia de Brenda en psicología infantil ha sido una bendición para nosotros. Antes de comenzar las sesiones, nuestro hijo tenía dificultades en la escuela y con sus compañeros. A través de su consejería paciente y reflexiva, Brenda lo ayudó a desarrollar las habilidades que necesitaba para expresar sus emociones de manera constructiva y construir relaciones más fuertes.",
    author: "Michael T.",
  },
  {
    quote: "Como madre soltera, encontrar apoyo que resonara con las necesidades de mi hija y las mías fue un desafío hasta que conocimos a Brenda. Su enfoque en la consejería es tanto reconfortante como práctico. No solo ayudó a mi hija a ganar confianza, sino que también me enseñó cómo ser una madre más comprensiva y de apoyo. Nuestra relación nunca ha estado mejor.",
    author: "Sarah L.",
  },
  {
    quote: "Brenda tiene una capacidad notable para conectar con los niños y entender sus paisajes psicológicos. Sus sesiones han ayudado a nuestra hija a superar su ansiedad sobre la escuela y las interacciones sociales. Ha sido una alegría verla prosperar y volverse más extrovertida, gracias al apoyo compasivo y específico de Brenda.",
    author: "Joshua K.",
  }
];


const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Function to handle the navigation of testimonials
  const navigateTestimonials = (direction) => {
    if (direction === 'next') {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (direction === 'prev') {
      setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <div className=" py-10 px-5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-headingColor font-[600] text-lg sm:text-xl md:text-3xl mx-auto">
          Testimonios
        </h2>
        <div className="relative w-full flex items-center mt-2">
          <button
            className="text-4xl text-gray-600 hover:text-gray-800 px-3"
            onClick={() => navigateTestimonials('prev')}
          >
            &#10094;
          </button>
          <div className="bg-white shadow-lg rounded-lg p-6" style={{ minHeight: '150px' }}>
            <div className="flex flex-col justify-between h-full">
              <p className="text-smallTextColor text-justify overflow-y-auto">{testimonials[index].quote}</p>
              <div className="flex items-center mt-4">
                <p className="text-smallTextColor text-lg font-semibold">{testimonials[index].author}</p>
              </div>
            </div>
          </div>
          <button
            className="text-4xl text-gray-600 hover:text-gray-800 px-3"
            onClick={() => navigateTestimonials('next')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
