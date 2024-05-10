// import React from 'react'

// const Contact = () => {
//   return (
//     <div className="bg-neutral-100 px-6 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto text-center">
//         <blockquote className="text-lg md:text-xl italic text-gray-600">
//           "Comprender quien eres es mas importante que perseguir aquello que deberias ser."
//         </blockquote>
//         <button
//           className="mt-8 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out"
//           onClick={() => window.location.href = '/contact'} // Adjust href as needed
//         >
//           Contáctame
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className='bg-primaryColor'>
            <h2 className="text-center text-white font-[600] text-lg sm:text-xl md:text-3xl mx-auto mb-5">
                ¿Tienes más preguntas?
            </h2>
            <h1 className='text-center text-white font-[800] text-4xl sm:text-5xl md:text-6xl mt-2 mb-10 max-w-[700px] mx-auto w-full'>
                ¡Contáctame!
            </h1>
            <form 
                target="_blank"
                action="https://formsubmit.co/mastergamerxbox@gmail.com"
                method="POST"
                className="max-w-xl mx-auto p-2"
            >
                <div className="form-group mb-5">
                    <div className="col">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electrónico "
                            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div >
                    <input
                        type="text"
                        name="phone"
                        placeholder='Número de Teléfono'
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        rows="10"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-lg btn-dark btn-block w-full border-white border-solid border-[1.5px] text-white hover:border-indigo-200 hover:text-indigo-200 font-bold py-2 px-4 rounded">
                    Enviar Mensaje
                </button>
            </form>
        </section>
    );
}

export default Contact;
