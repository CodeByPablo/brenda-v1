import React from 'react'
import heroImg from '../../assets/images/hero.jpg'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='home'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* {Hero Left Content} */}
          <div className='w-full md:basis-1/2'>
            <h2 
              data-aos='fade-right' 
              data-aos-duration='1500' 
              className='text-headingColor font-[600] text-xl'
            >
              Atrévete a transformarte
            </h2>
            <h1
              data-aos='fade-up' 
              data-aos-duration='1500'  
              className="text-headingColor font-[800] text-4xl pt-2 sm:text-5xl md:text-6xl w-full"
            >
              Juntos hacia la <b className="text-primaryColor">exploración</b> de tus
              <b className="text-primaryColor"> emociones</b>
            </h1>
            <p
              data-aos='fade-up'
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-5 font-[500] text-m leading-7 sm:pl-4 sm:pr-10'
            >
              <span><i class="ri-service-fill"></i></span>
              Adéntrate a un espacio seguro, abraza cambios positivos y desarrolla una nueva perspectiva sobre ti mismo y tu mundo.
            </p>
            <div
              data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay='200'
              className='flex items-center gap-6 mt-7'
            >
              <a target='_blank' href='https://louisrodriguez.setmore.com/beta'>
                <button className=' bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class="ri-calendar-schedule-fill"></i> Agendar Cita
                </button>
              </a>
            </div>
          </div>

          {/* {Hero IMG} */}
          <div className='basis-1/2 mt-10 sm:mt-0 max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw] mx-auto'>
            <figure className='flex items-center justify-center p-1 rounded-full shadow-2xl bg-white'>
              <img src={heroImg} alt="" className='w-full h-full object-cover rounded-full' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
