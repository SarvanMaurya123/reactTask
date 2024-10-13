
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose, } from "react-icons/md"; // 



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <header className={`transition-all duration-300  py-4`}>
            <div className="flex justify-between items-center px-4 md:px-8">
                <p className={` text-2xl`}>&#60;SM/&#62;</p>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                        {isMenuOpen ? <MdClose className="w-10 h-10" /> : <MdMenu className="w-10 h-10" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}>
                        <div className={`bg-white rounded-lg shadow-lg p-4 transition-transform transform ${isMenuOpen ? "scale-100" : "scale-0"} w-96`}>
                            <nav>
                                <ul className="flex flex-col gap-6">
                                    <li>
                                        <NavLink
                                            to="/"

                                            onClick={toggleMenu}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/task"

                                            onClick={toggleMenu}
                                        >
                                            DashBoard
                                        </NavLink>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex items-center`}>
                    <ul className="flex flex-row gap-6">
                        <li>
                            <NavLink
                                to="/"

                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/task"
                            >
                                Dashboard
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                {/* Dark Mode Button */}
                <div className="flex items-center gap-4">
                    <NavLink
                        to="/signup/task"
                    >
                        SignUp
                    </NavLink>
                    <NavLink
                        to="/login/task"
                    >
                        LogIn
                    </NavLink>
                </div>
            </div>
        </header>
    );
};



export default Header;
