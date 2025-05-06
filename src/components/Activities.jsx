function Activities() {
  const projects = [
    {
      title: "To-Do List",
      image: "/todo.png",
      link: "https://to-do-client-efjy.vercel.app/",
    },
    {
      title: "Array_Object",
      image: "/Array.png",
      link: "/Array_Object/index.html",
    },
    {
      title: "Calculator",
      image: "/calcu.png",
      link: "/calculator/index.html",
    },
    {
      title: "Loop",
      image: "/loop.png",
      link: "/loop/index.html",
    },
  ];

  return (
    <section className="p-6 bg-gradient-to-r from-[#f5f0ea] via-[#fbe9d7] to-[#f4dec2] min-h-screen rounded-xl shadow-md">
      <h2 className="text-3xl font-extrabold text-center text-[#5d3a00] mb-6">
        My Activities & Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Activities;
