import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin
} from "lucide-react";
import { TiSocialInstagram } from "react-icons/ti";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "#hero" },
    { icon: <User size={20} />, label: "About", href: "#about" },
    { icon: <Code size={20} />, label: "Skills", href: "#skills" },
    { icon: <Briefcase size={20} />, label: "Projects", href: "#projects" },
    { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
  ];

  // const socialItems = [
  //   { icon: <FaGithub size={18} />, href: "https://github.com/pankaj504", label: "GitHub" },
  //   { icon: <LiaLinkedin size={18} />, href: "https://www.linkedin.com/in/pankaj-lohani-dev", label: "LinkedIn" },
  //   { icon: <TiSocialInstagram size={18} />, href: "https://www.instagram.com/panku.lohani/?utm_source=qr&igsh=eG9uNTZuMWdtcHZl#", label: "Instagram" },
  // ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <div className={`
        flex items-center gap-2 px-3 py-3 rounded-2xl border transition-all duration-300
        ${isScrolled
          ? "glass bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl"
          : "bg-black/20 backdrop-blur-md border-white/5"}
      `}>

        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/5 transition-all duration-300 hover:-translate-y-1"
              aria-label={item.label}
            >
              <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                {item.icon}
              </span>

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 whitespace-nowrap backdrop-blur-sm">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2" />

        {/* Social Items */}
        {/* <div className="flex items-center gap-1">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/5 transition-all duration-300 hover:-translate-y-1"
              aria-label={item.label}
            >
              <span className="text-gray-400 group-hover:text-primary transition-colors">
                {item.icon}
              </span>
            </a>
          ))}
        </div> */}

      </div>
    </nav>
  );
}
