function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-6 pt-20 pb-6 min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50 border-4 border-[#f5cbb4] rounded-xl shadow-md">
      
      {/* Always Top-Left Name */}
      <div className="absolute top-4 left-4 text-xl font-bold text-[#f3ab85] z-20">
        Jhooonaaa
      </div>

      {/* Photo with Background Blob */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="absolute w-40 h-52 sm:w-56 sm:h-72 md:w-80 md:h-96 bg-[#ffefa1] rounded-[40%] rotate-6 -top-4 -left-4 md:-top-6 md:-left-6 z-0 transition-all duration-300"></div>

        <div className="relative z-10 w-40 h-52 sm:w-56 sm:h-72 md:w-72 md:h-96 overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-300 bg-white transition-all duration-300">
          <img
            src="/ok.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-2">
          About Me
        </h2>
        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          I'm Jhona Mae Artienda, a 3rd year student at the University of Abra, passionate about creating beautiful and functional websites. 
          I enjoy exploring web design and development, and I'm always eager to learn new things and improve my skills in building user-friendly digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
