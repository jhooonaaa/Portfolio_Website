function FrontPage({ onEnter }) {
  return (
    <section className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-gradient-to-r from-[#f5f0ea] via-[#fbe9d7] to-[#f4dec2]">
      <div
        onClick={onEnter}
        className="relative w-50 h-50 mb-6 rounded-full cursor-pointer shadow-xl transition-transform hover:scale-105"
      >
        <div className="absolute inset-0 rounded-full" />
        <img
          src="/1.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <h2 className="text-3xl font-semibold text-[#5d3a00]">Hey, I'm Jhona Mae</h2>
      <p className="mt-1 text-[#7a4e00] text-xl font-medium">Student Web Developer | Full Stack Enthusiast</p>
      <p className="mt-2 text-gray-700 max-w-md">
      Exploring the World of Web Design & Development
      </p>
    </section>
  );
}

export default FrontPage;
