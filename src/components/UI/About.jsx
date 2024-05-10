import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-8 sm:gap-10 md:gap-14 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-8 max-w-[1200px] mx-auto w-full">
      <h2 className="text-headingColor font-[600] text-lg sm:text-xl md:text-3xl mx-auto">
        Un poco acerca de mí
      </h2>
      <h1 className="text-headingColor font-[800] text-4xl sm:text-5xl md:text-6xl -mt-8 max-w-[700px] mx-auto w-full text-center">
        Experta en <b className="text-primaryColor">ayudarte</b> con tu
        <b className="text-primaryColor"> bienestar</b> emocional
      </h1>
      <div className="flex flex-col gap-4 text-sm sm:text-base max-w-[700px] mx-auto w-full text-center sm:text-justify">
        <p>
        ¡Hola! Soy <b>Brenda Perales</b>, psicóloga clínica formada en el Tecnológico de Monterrey. Desde que comencé mi carrera, me he dedicado a trabajar con <b>personas de todas las edades</b>, desde niños que apenas comienzan a entender el mundo, hasta adultos que buscan reencontrarse o mejorar su calidad de vida. <b>Mi enfoque</b> siempre ha sido proporcionar un entorno seguro y comprensivo donde mis pacientes puedan sentirse libres de expresar sus emociones y enfrentar sus desafíos.
        </p>
        <p>
        Como alguien que ha experimentado los <b>beneficios transformadores de la terapia</b>, estoy dedicada a hacerla accesible para todos. Anímate a empezar este viaje empoderador hacia un cambio significativo. Ofrezco consejería individual para <b>tratar una variedad de condiciones y situaciones</b>, tales como:
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:gap-4 max-w-[700px] mx-auto w-full justify-center">
        {/* List of Services */}
        {services.map((service, index) => (
          <div key={index} className='py-2 rounded text-xs sm:text-base px-3 z-10 flex items-center justify-center gap-2 bg-primaryColor text-white sm:flex-1 text-center'>
            {service.star && <i class="ri-star-fill"></i>}
            <p className="whitespace-nowrap">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const services = [
    { name: 'Mejora Conductual', star: true },
    { name: 'Apego Emocional', star: false },
    { name: 'Aceptación y Acción', star: true },
    { name: 'Dinámica Familiar', star: false },
    { name: 'Exploración', star: true },
    { name: 'Desarrollo Personal', star: true },
    { name: 'Crecimiento Emocional', star: false },
    { name: 'Resolución Conflictos', star: true },
    { name: 'Exploración Inconsciente', star: false },
    // Add other services similarly
  ];

export default About
