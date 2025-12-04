import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    const menu = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" },
    ];

    const social = [
        { icon: <FaFacebookF />, link: "https://facebook.com" },
        { icon: <FaTwitter />, link: "https://twitter.com" },
        { icon: <FaInstagram />, link: "https://instagram.com" },
        { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-200 portion-sticky bottom-150 w-full">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center md:items-start">

                {/* Logo & Description */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-blue-500">GTU Study Mate</h2>
                    <p className="mt-2 text-gray-400 max-w-xs">
                        Your one-stop platform for GTU resources, papers, books, and study materials.
                    </p>
                </div>

                {/* Menu Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="flex flex-col space-y-1 text-gray-300">
                        {menu.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {social.map((s, index) => (
                        <a
                            key={index}
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-4 text-center py-3 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} GTU Study Mate. All rights reserved.
            </div>
        </footer>
    );
}
