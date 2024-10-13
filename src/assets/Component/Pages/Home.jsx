import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Side - Content Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Join our community to get the best services, enjoy seamless experience, and connect with others.
                    </p>

                    <div className="space-x-4">
                        {/* Login Button */}
                        <Link to="/login/task">
                            <button className="px-12 md:px-20 py-2 border-[1px] hover:bg-gray-200 bg-gray-200 hover:border-gray-300 border-gray-300">
                                Login
                            </button>
                        </Link>

                        {/* SignUp Button */}
                        <Link to="/signup">
                            <button className="px-12 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Right Side Visual"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
