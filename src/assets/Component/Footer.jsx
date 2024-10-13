import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                {/* Centered Section - Text */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">© 2024 Sarvan Maurya</h2>
                </div>

                {/* Centered Section - Icons */}
                <div className="flex justify-center space-x-6">
                    {/* GitHub Icon */}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaGithub className="text-2xl" />
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
