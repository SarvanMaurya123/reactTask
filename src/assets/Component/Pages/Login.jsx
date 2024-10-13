import { NavLink } from "react-router-dom";

const Login = () => {
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full my-20 max-w-80 md:max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Email/Username</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your email or username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your password" />
                    </div>
                    <div className="mb-5 text-right">
                        <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full text-black border-[1px] border-gray-300 p-2 rounded hover:bg-gray-200">Login Now</button>
                    <div className="text-center mt-5">
                        <NavLink href="/signup/task" className="text-sm ">Dont have Account? <span className="text-blue-400">Sign up</span></NavLink>
                    </div>
                </form>
            </div>
        </div>

    </>)
}
export default Login;