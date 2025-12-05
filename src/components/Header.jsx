import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header className="w-full bg-tranparent  backdrop-blur-md shadow-2xl shadow-gray-600 fixed top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                
                <NavLink 
                    to="/" 
                    className="text-2xl font-bold text-green-900"
                >
                    Padd le beta📚
                </NavLink>

                <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                        }
                    >
                        Contact
                    </NavLink>

                </ul>

                <div className="md:hidden text-gray-700 text-2xl cursor-pointer">
                    ☰
                </div>
            </nav>
        </header>
    );
}
