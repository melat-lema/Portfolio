import React from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0A12] flex flex-col items-center justify-center mt-16">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Get in Touch</h1>
        <p className="text-gray-400 mt-2">Have a question or want to work together? Let’s connect!</p>
      </div>

      {/* Contact Info */}
      <div className="w-full px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#2D2D44] p-2 rounded-lg">
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                <p className="text-white">melatlema21@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#2D2D44] p-2 rounded-lg">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Location</h3>
                <p className="text-white">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#2D2D44] p-2 rounded-lg">
                <FaPhone className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                <p className="text-white">+251-924-43-25-92</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#2D2D44] p-2 rounded-lg">
                <FaLinkedin className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/melat-lema-1043572b6/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  linkedin.com/in/melat-lema-1043572b6
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#2D2D44] p-2 rounded-lg">
                <FaGithub className="text-gray-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">GitHub</h3>
                <a href="https://github.com/melat-lema" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  github.com/melat-lema
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Empty (No Form) */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">I’m always open to new opportunities.</p>
              <p className="text-gray-400 mt-2">Feel free to reach out!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;