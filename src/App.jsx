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

  if (!showMainContent) {
    return <FrontPage onEnter={() => {
      setShowMainContent(true);
      setTimeout(() => scrollToRef(aboutRef), 200);
    }} />;
  }

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 bg-[#f5cbb4] p-6 shadow-lg rounded-r-xl 
                      w-40 md:w-56 lg:w-64 flex flex-col">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-700">My Portfolio</h2>
        </div>
        <ul className="space-y-4 text-base font-medium text-gray-700">
          <li>
            <button
              onClick={() => setShowMainContent(false)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:text-[#CB997E] transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:text-[#CB997E] transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(activitiesRef)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:text-[#CB997E] transition"
            >
              Activities
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(socialRef)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:text-[#CB997E] transition"
            >
              Social Link
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scroll-smooth p-6 ml-40 md:ml-56 lg:ml-64">
        <div ref={aboutRef}><About /></div>
        <div ref={activitiesRef}><Activities /></div>
        <div ref={socialRef}><SocialLink /></div>
      </main>
    </div>
  );
}

export default App;
