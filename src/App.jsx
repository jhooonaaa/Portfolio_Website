import { useRef, useState } from 'react';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Activities from './components/Activities';
import SocialLink from './components/SocialLink';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const socialRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navbar = () => (
  <nav className="w-full bg-[#f5cbb4] px-3 py-2 shadow-md fixed top-0 left-0 z-50 flex justify-between items-center">
    <img
      src="/bg.jpg"
      alt="Avatar"
      className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow"
    />
    <ul className="flex gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-700">
      <li>
        <button
          onClick={() => setShowMainContent(false)}
          className="hover:text-[#CB997E] transition"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToRef(aboutRef)}
          className="hover:text-[#CB997E] transition"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToRef(activitiesRef)}
          className="hover:text-[#CB997E] transition"
        >
          Activities
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToRef(socialRef)}
          className="hover:text-[#CB997E] transition"
        >
          Social
        </button>
      </li>
    </ul>
  </nav>
);


  if (!showMainContent) {
    return <FrontPage onEnter={() => {
      setShowMainContent(true);
      setTimeout(() => scrollToRef(aboutRef), 200);
    }} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 space-y-10">
  <section ref={aboutRef} className="scroll-mt-20"><About /></section>
  <section ref={activitiesRef} className="scroll-mt-20"><Activities /></section>
  <section ref={socialRef} className="scroll-mt-20"><SocialLink /></section>
</main>

    </div>
  );
}

export default App;
