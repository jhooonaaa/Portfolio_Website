import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function Portfolio() {
  const [view, setView] = useState("menu"); 
  // menu | cisco | webinar

const ciscoCertificates = [
  {
    title: "AI Fundamentals with IBM Skills Build",
    image: "/ibm.jpeg",
    description:
      "Completed an online short course covering AI fundamentals and analytics.",
    link: "/IBM.pdf",
  },
  {
    title: "Apply AI: Analyze Customer Reviews",
    image: "/customer.png",
    description:
      "This course introduces thematic analysis using AI tools, turning reviews into insights.",
    link: "/Analyze_Customer_Reviews.pdf",
  },
  {
    title: "Apply AI: Update Your Resume",
    image: "/apply.png",
    description:
      "Your Resume must past automated screening before reaching employers.",
    link: "/Update_Your_Resume.pdf",
  },
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
  {
    title: "JavaScript",
        image: "/JAVA.png",
        link: "/java.pdf",
  },
];



  return (

    <section className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50 px-6 py-12 border-4 border-[#f5cbb4] rounded-2xl shadow-xl">

      {/* BACK BUTTON */}
      {view !== "menu" && (
        <button
          onClick={() => setView("menu")}
          className="flex items-center gap-2 text-[#5d3a00] font-semibold mb-6 hover:text-[#9c6b30]"
        >
          <FaArrowLeft /> Back
        </button>
      )}

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-[#5d3a00] mb-12">
        PORTFOLIO
      </h2>

      {/* MENU VIEW */}
{view === "menu" && (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      <button
        onClick={() => setView("cisco")}
        className="bg-white p-10 rounded-xl shadow-md hover:scale-105 transition text-center"
      >
        <h3 className="text-2xl font-semibold text-[#9c6b30]">
          CISCO NetAcad
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Online Short Courses
        </p>
      </button>

      <button
        onClick={() => setView("webinar")}
        className="bg-white p-10 rounded-xl shadow-md hover:scale-105 transition text-center"
      >
        <h3 className="text-2xl font-semibold text-[#9c6b30]">
          Webinar
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Online & Campus Webinars
        </p>
      </button>

    </div>
  </div>
)}


      
      {/* CISCO VIEW */}
{/* CISCO VIEW */}
{view === "cisco" && (
  <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md">
    <h3 className="text-2xl font-semibold text-[#9c6b30] mb-6">
      CISCO NetAcad Online Short Courses
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ciscoCertificates.map((cert, index) => (
        <div
          key={index}
          className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-5">
            <h4 className="font-semibold text-lg">
              {cert.title}
            </h4>

            <p className="text-sm text-gray-600 mt-2">
              {cert.description}
            </p>

            <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block mt-4
    px-4 py-2
    text-sm font-semibold
    text-white
    bg-[#9c6b30]
    rounded-lg
    shadow-sm
    hover:bg-[#7a5324]
    hover:shadow-md
    transition
  "
>
  View Certificate 
</a>

          </div>
        </div>
      ))}
    </div>
  </div>
)}


      {/* WEBINAR VIEW */}
      {view === "webinar" && (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#9c6b30] mb-6">
            Webinar
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 border rounded-lg">
              <h4 className="font-semibold">none</h4>
              <p className="text-sm text-gray-600 mt-2">
                none
              </p>
            </div>

          
          </div>
        </div>
      )}

    </section>
  );
}

export default Portfolio;
