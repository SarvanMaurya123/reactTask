import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-80 md:max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Username</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your password" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Confirm your password" />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <NavLink to="/login/task" className="text-sm text-black">Already have an account? <span className="text-blue-400">Login</span></NavLink>
                    </div>
                    <button type="submit" className="w-full text-black border-[1px] border-gray-300 p-2 rounded hover:bg-gray-200">Sign Up</button>
                </form>
            </div>
        </div>

    </>)
}
export default SignUp;