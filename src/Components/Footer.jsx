//import from react
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* My Name   */}
        <span className="text-center text-sm text-purple-500">
          Made with <span className="text-red-500">❤️</span> by Shriharsh.
        </span>
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </p>
        {/*Social Links */}
        <div className="flex space-x-6 text-xl">
          {/* Instagram   */}
          <a
            href="https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          {/* linkedin   */}
          <a
            href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          {/* Github  */}
          <a
            href="https://github.com/HarshNandigamwar
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          {/* leetCode   */}
          <a
            href="https://leetcode.com/Shriharsh_Nandigamwar/
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
