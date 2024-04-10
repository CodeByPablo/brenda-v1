import React from "react";

const Hero = () => {
  return (
    <section
      style={{ minHeight: "calc(100vh - 112px)" }}
      className="flex flex-1 flex-col items-center justify-center md:flex-row gap-4 md:gap-10 lg:gap-14 px-6 sm:px-8 max-w-[1200px] mx-auto w-full"
    >
      <div className="flex flex-col md:flex-1 justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
          Juntos, hacia una <b className="text-[#E6A4B4]">mejor versión</b> de
          ti
        </h1>
        <p className="text-sm sm:text-base">
          Adéntrate en este espacio de{" "}
          <b className="text-[#E6A4B4]">autoexploración</b> y{" "}
          <b className="text-[#E6A4B4]">autodescubrimiento</b>, donde, como tu
          terapeuta, estaré a tu lado para ayudarte a reconocer tus fortalezas
          innatas y construir una base sólida para{" "}
          <b className="text-[#E6A4B4]">alcanzar tus metas</b> y{" "}
          <b className="text-[#E6A4B4]">sueños</b>.
        </p>
        <button className="bg-[#E6A4B4] text-white text-lg sm:text-xl md:text-2xl font-medium border-2 border-solid border-[#e6a4b587] rounded-lg px-4 py-2 mx-auto md:mr-auto md:ml-0 hover:bg-[#e6a4b587] duration-200">Contáctame</button>
      </div>
      <div className="flex max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw] mx-auto w-1/3 flex-col md:flex-1/3 lg:justify-center lg:items-center">
        <img src="https://picsum.photos/id/237/400/400" alt="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
