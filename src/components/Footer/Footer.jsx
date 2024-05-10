import React from 'react'

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className='py-20 px-8 flex items-center justify-center text-sm sm:text-base'>
      <div className=' mx-auto max-w-[600px] w-full flex flex-col gap-4 text-center'>
        <p>Copyright © {year} Brenda Perales</p>
        <a href="#">Website by Pablo 👨🏻‍💻</a>
      </div>
    </footer>
  )
}

export default Footer
