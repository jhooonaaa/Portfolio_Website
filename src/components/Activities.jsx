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
      description: "crypto converter that allows users to input an amount in PHP (Philippine Peso) and convert it into various cryptocurrencies such as XRP, USDT, DOGE, and TRX.",
    },
    {
      title: "Loop Exercises",
      image: "/loop.png",
      link: "/loop/index.html",
      description: "Fun and engaging loop practice activities using JavaScript for beginners.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#f5f0ea] via-[#fbe9d7] to-[#f4dec2] px-6 py-10 border-4 border-[#f5cbb4] rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-center text-[#5d3a00] mb-10">
        My Activities & Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
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
    </section>
  );
}

export default Activities;
