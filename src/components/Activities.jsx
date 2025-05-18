function Activities() {
  const activityList = [
    {
      title: "To-Do List",
      image: "/todo.png",
      link: "https://to-do-client-efjy.vercel.app/",
      description: "A task manager app with login and CRUD features for organizing daily tasks efficiently.",
    },
    {
      title: "Array & Object Exercise",
      image: "/Array.png",
      link: "/Array_Object/index.html",
      description: "An interactive activity to demonstrate the use of JavaScript arrays and objects.",
    },
    {
      title: "Simple Calculator",
      image: "/calcu.png",
      link: "/calculator/index.html",
      description: "A basic calculator built using HTML, CSS, and JavaScript with two display screens.",
    },
    {
      title: "Crypto Converter",
      image: "/converter.png",
      link: "/converter-activity/index.html",
      description: "Crypto converter that allows users to input an amount in PHP and convert it into various cryptocurrencies like XRP, USDT, DOGE, and TRX.",
    },
    {
      title: "Loop Exercises",
      image: "/loop.png",
      link: "/loop/index.html",
      description: "Fun and engaging loop practice activities using JavaScript for beginners.",
    },
  ];

 const certificateList = [
  {
    title: "Data Science",
    image: "/DATA.png",
    link: "/data.pdf",
  },
  {
    title: "Modern AI",
    image: "/AI.png",
    link: "/ai.pdf",
  },
  {
    title: "JavaScript",
    image: "/JAVA.png",
    link: "/java.pdf",
  },
];


  return (
    <section className="min-h-screen bg-gradient-to-r from-[#f5f0ea] via-[#fbe9d7] to-[#f4dec2] px-6 py-10 border-4 border-[#f5cbb4] rounded-2xl shadow-xl">
      {/* Activities & Projects Section */}
      <h2 className="text-4xl font-bold text-center text-[#5d3a00] mb-10">
        ACTIVITIES AND PROJECTS
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {activityList.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#4b2c00] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </a>
        ))}
      </div>

     {/* Certificate Section */}
<h2 className="text-3xl font-bold text-center text-[#5d3a00] mb-2">
  CERTIFICATE
</h2>
<h3 className="text-lg text-center text-[#5d3a00] mb-8">
  Certificate of completion awarded for successfully finishing a course or project.
</h3>

<div className="flex flex-wrap justify-center gap-8">
  {certificateList.map((cert, idx) => (
    <a
      key={idx}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg"
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-40 object-cover rounded-xl"
      />
    </a>
  ))}
</div>


    </section>
  );
}

export default Activities;
