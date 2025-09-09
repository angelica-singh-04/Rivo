import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaLinkedin,FaGithub} from "react-icons/fa";
import logo from "../../assets/logo_transparent.png";

export default function Footer() {
  return (
    <footer className="bg-transparent text-black py-10 flex flex-col items-center space-y-6">
      {/* Social Icons */}
      <div className="flex space-x-4 text-2xl">
        <FaGithub className="cursor-pointer hover:opacity-70 transition" />
        <FaTwitter className="cursor-pointer hover:opacity-70 transition" />
        <FaInstagram className="cursor-pointer hover:opacity-70 transition" />
        <FaYoutube className="cursor-pointer hover:opacity-70 transition" />
        <FaLinkedin className="cursor-pointer hover:opacity-70 transition" />
      </div>

      {/* Business Concept */}
      <p className="text-center max-w-3xl text-sm text-gray-500">
        Rivo helps developers write secure, high-quality code with the power of AI. 
        Our platform provides intelligent code reviews, detects vulnerabilities, and ensures best practices, 
        making your development process faster and safer.
      </p>

      {/* Logo */}
      <div className="flex items-center space-x-2 text-2xl font-bold">
  <img src={logo} alt="CodeGuardianAI Logo" className="w-16 h-16" />
</div>

      {/* Location + Currency */}
      <p className="text-sm text-gray-500">Made with ❤️ by Angelica Singh @2025</p>
    </footer>
  );
}
