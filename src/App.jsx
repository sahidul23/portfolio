import { useState } from "react";
import profilePic from "./photo.jpeg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "React", "JavaScript", "HTML", "CSS", "Tailwind CSS",
    "Node.js", "Express.js", "MySQL", "REST APIs",
    "Python", "Django", "Git", "Vite"
  ];

  const projects = [
    {
      title: "Mental Health Quiz System",
      desc: "A Django web app providing personalized mental health suggestions.",
      github: "#",
      live: "#",
      tech: ["Django", "Python", "SQLite"]
    },
    {
      title: "Fitness_app",
      desc: "A pose corrector fitness web app using Flask,Python, and MySQL with authentication and UI.",
      github: "#",
      live: "#",
      tech: ["Flask", "Python", "MySql"]
    }
  ];

  return (
    <div className="text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-blue-600">MD SAHIDUL ISLAM</a>

          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-white shadow-md flex flex-col gap-2 px-4 pb-4">
            <li><a href="#home" className="block p-2 rounded hover:bg-gray-100">Home</a></li>
            <li><a href="#about" className="block p-2 rounded hover:bg-gray-100">About</a></li>
            <li><a href="#skills" className="block p-2 rounded hover:bg-gray-100">Skills</a></li>
            <li><a href="#projects" className="block p-2 rounded hover:bg-gray-100">Projects</a></li>
            <li><a href="#contact" className="block p-2 rounded hover:bg-gray-100">Contact</a></li>
          </ul>
        )}
      </header>

      {/* Hero Card */}
      <section id="home" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4">Hi, I'm Sahidul Islam</h1>
              <p className="text-lg mb-6">
                Full Stack Developer | React, Express, MySQL
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600">
                  View Projects
                </a>
                <a href="#contact" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={profilePic}
                alt="Sahid Afridi"
                className="w-64 h-64 rounded-full border-4 border-gray-200 shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Card */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a developer building clean, user-friendly web applications.
              I enjoy working with React, Express, and databases to create practical solutions.
              I also love learning about deployment and cloud technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Card */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, index) => (
                <span
                  key={s}
                  className={`inline-block px-4 py-2 rounded-full text-white font-semibold cursor-default
                    ${index % 5 === 0 ? 'bg-blue-500' : ''}
                    ${index % 5 === 1 ? 'bg-green-500' : ''}
                    ${index % 5 === 2 ? 'bg-red-500' : ''}
                    ${index % 5 === 3 ? 'bg-purple-500' : ''}
                    ${index % 5 === 4 ? 'bg-yellow-500' : ''}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Card */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map(p => (
                <div key={p.title} className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-xl transition-shadow">
                  <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-3">{p.desc}</p>
                
                  <div className="flex gap-2 text-xs flex-wrap">
                    {p.tech.map(t => <span key={t} className="inline-block px-2 py-1 bg-gray-200 rounded-full">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-700 mb-6">
              Want to work together or have a question? Reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a href="mailto:sahidafridi7099@gmail.com" className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 font-semibold">
                Email Me
              </a>
              <a href="https://github.com/sahidul23" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 font-semibold">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 font-semibold">
                LinkedIn
              </a>
              <a
                href="/Sahid_Afridi_Resume.pdf"
                target="_blank"
                download
                className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-semibold flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
                </svg>
                See Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sahidul Islam. All rights reserved.
      </footer>
    </div>
  );
}
