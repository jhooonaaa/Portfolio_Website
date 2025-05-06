import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialLink() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-r from-orange-100 via-white to-orange-50 p-10 rounded-xl shadow-md min-h-screen overflow-hidden">

      {/* Decorative Background Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#f4dec2_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none z-0" />

      {/* Centered Text Content */}
      <div className="relative z-10 max-w-xl">
        <h2 className="text-4xl font-extrabold text-[#5d3a00]">
          Connect <span className="text-[#9c6b30]">with Me</span>
        </h2>
        <p className="mt-4 text-[#4b3e3e]">
          I'm passionate about building clean and beautiful user experiences. Connect with me below!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-[#6b4e2f] mt-6">
          <a href="https://github.com/jhooonaaa" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaGithub /></a>
          <a href="https://www.facebook.com/jhona.artienda.1" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5998]"><FaFacebook /></a>
          <a href="https://www.instagram.com/xx.itsmejhona/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/jhona-mae-artienda-7771b234a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}

export default SocialLink;
