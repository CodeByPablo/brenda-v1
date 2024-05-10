import React, { useEffect } from 'react'

const Services = () => {
  
    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.currentTarget.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;
    
        window.scrollTo({
          top: location - 80,
          left: 0,
        });
      }
  
    return (
    <section id="services" className=' bg-primaryColor text-white'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='font-[600] text-lg sm:text-xl md:text-3xl mx-auto'>
                    Servicios que ofrezco
                </h2>
                <h1 className="font-[800] text-4xl sm:text-5xl md:text-6xl mt-2 mb-10 max-w-[700px] mx-auto w-full text-center">
                    ¿Pasando por un momento difícil? Aquí estoy para ayudarte
                </h1>
                <p className='flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-[800px] mx-auto w-full'>
                Trabajemos juntos para diseñar un plan terapéutico que se ajuste a tus necesidades únicas, proporcionándote las herramientas necesarias para enfrentar tus desafíos.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center mt-5 space-y-3 sm:space-y-0 sm:space-x-3  w-full">
                {/* flex justify-center mt-5 space-x-6 w-full / flex flex-col sm:flex-row justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-6 w-full */}
                <a
                    target='_blank'
                    href="https://louisrodriguez.setmore.com/beta/book?step=time-slot&products=6fbc8bb0-b071-4178-a2b2-52f01d41e1bc&type=service&staff=fa1eadc8-127a-4d4b-b180-cee3ddeda541&staffSelected=true"
                    className="flex flex-col items-center bg-white text-black font-medium py-4 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 flex-grow"
                >
                    <div className='flex items-center text-primaryColor justify-between gap-4 text-lg sm:text-xl md:text-2xl font-semibold capitalize'>
                        <h3>Asesoramiento</h3>
                        <i class="ri-phone-fill"></i>
                    </div>
                    <div className='flex items-center flex-1 justify-center'>
                        <p className='text-center max-w-[200px]'>Agenda una llamada gratis conmigo de 15 minutos</p>
                    </div>
                </a>
                <a
                    target='_blank'
                    href="https://louisrodriguez.setmore.com/beta/book?step=time-slot&products=e52fd21d-9fcc-46cd-90f0-33532d1f4469&type=service&staff=fa1eadc8-127a-4d4b-b180-cee3ddeda541&staffSelected=true"
                    className="flex flex-col items-center bg-white text-black font-medium py-4 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 flex-grow"
                >
                    <div className='flex items-center text-primaryColor justify-between gap-4 text-lg sm:text-xl md:text-2xl font-semibold capitalize'>
                        <h3>Consulta</h3>
                        <i class="ri-chat-smile-2-fill"></i>
                    </div>
                    <div className='flex items-center flex-1 justify-center'>
                        <p className='text-center max-w-[200px]'>Consulta psicológica personalizada de 1 hora</p>
                    </div>
                </a>
                <a
                    onClick={handleClick}
                    href="#contact"
                    className="flex flex-col items-center bg-white text-black font-medium py-4 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 flex-grow"
                >
                    <div className='flex items-center text-primaryColor justify-between gap-4 text-lg sm:text-xl md:text-2xl font-semibold capitalize'>
                        <h3>Ubicación</h3>
                        <i class="ri-earth-fill"></i>
                    </div>
                    <div className='flex items-center flex-1 justify-center'>
                        <p className='text-center max-w-[200px]'>Sesiones disponibles solo de manera online</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

const services = [
    {
        name: ''
    },
]

export default Services
