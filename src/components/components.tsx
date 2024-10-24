// components/components.tsx
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
      <ul className="flex space-x-6 justify-center">
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <Link 
              href={`#${item}`} 
              className="text-white hover:text-gray-200 transition transform hover:scale-105"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ResumeSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10">
      <section id="home" className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img   
            src="/Images/girl-avatar.jpg" // Replace image path
            alt="pic"
            className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-3xl font-bold mt-4">Farah Almas</h1>
          <p className="text-gray-600 text-center">A passionate developer with a love for creating innovative solutions.</p>
        </div>
      </section>
      
      <section id="about" className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">I am a Software Developer with experience in `Html,Css,Typescript & Nextjs`. I love working on projects that challenge me and allow me to grow.</p>
      </section>
      
      <section id="projects" className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li className="hover:underline transform hover:scale-105 transition-transform duration-200"><a href='https://vercel.live/link/count-down-timer-farahalmas.vercel.app'><strong>Cound down Timer</strong></a></li>
          <li className="hover:underline transform hover:scale-105 transition-transform duration-200"><strong>Simple Calculator</strong></li>
          <li className="hover:underline transform hover:scale-105 transition-transform duration-200"><a href='http://resume-builder-farahalmas-gilt.vercel.app'><strong>Resume Builder</strong></a></li>
        </ul>
      </section>
      
      <section id="contact" className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">Feel free to reach out via:</p>
        <div className="flex space-x-4 mt-2">
          <a 
            href="https://www.linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/FarahAlmas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-gray-600 transition transform hover:scale-110 duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

const Components = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ResumeSection />
    </div>
  );
};

export default Components;
