import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DashBoard from './Pages/Dashboard';



function Routesdata() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/task" element={<Login />} />
                <Route path="/signup/task" element={<SignUp />} />
                <Route path="/dashboard/task" element={<DashBoard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routesdata;
