import React, { useRef, useState, useEffect } from 'react'

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleClick = e => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
    setIsMenuOpen(false);
  }

  return (
    <header className={`w-full h-[80px] leading-[80px] flex items-center fixed top-0 z-50 bg-white ${shadow ? 'shadow-md' : 'shadow-none'} transition-shadow duration-300 ease-in-out`}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* {LOGO} */}
          <div className='flex items-center gap-[10px]'>
            <div className='leading-[20px]'>
              <a href="#">
                <h2 className='text-xl text-smallTextColor font-[700]'>Brenda Perales</h2>
                <p className='text-smallTextColor text-[16px] font-[500]'>Psicóloga Clínica</p>
              </a>
            </div>
          </div>

          {/* {Menu Links} */}
          <div className={`absolute w-full md:relative md:w-auto transition-transform duration-300 ${isMenuOpen ? 'top-[80px] left-0' : '-top-full' } bg-white shadow-lg md:shadow-none`}>
            <ul className={`flex ${isMenuOpen ? 'flex-col divide-y divide-gray-200' : 'flex-row gap-8'} items-center`}>
              <li><a onClick={handleClick} className='hover-link' href="#about">Acerca de Mí</a></li>
              <li><a onClick={handleClick} className='hover-link' href="#services">Servicios</a></li>
              <li><a onClick={handleClick} className='hover-link' href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className='flex items-center gap-4'>
            <a target='_blank' href='https://louisrodriguez.setmore.com/beta'>
              <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-primaryColor hover:border-primaryColor hover:text-white hover:font-[500] ease-in-out duration-500'>
              <i class="ri-calendar-schedule-fill"></i> Agendar Cita
              </button>
            </a>
            <button onClick={toggleMenu} className='text-4xl text-smallTextColor md:hidden'>
              {isMenuOpen ? <i class="ri-close-large-line"></i> : <i class="ri-menu-line"></i>}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header