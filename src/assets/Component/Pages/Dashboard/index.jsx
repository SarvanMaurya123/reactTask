import { useState } from 'react';
import DashBoardData from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function DashBoard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const sidebarItems = [
        { name: 'Dashboard', icon: '📊' },
        { name: 'Profile', icon: '👤' },
        { name: 'Settings', icon: '⚙️' },
        { name: 'Logout', icon: '🔓' }
    ];

    return (
        <div className="flex h-full">
            {isSidebarOpen && (
                <div className="w-64 bg-gray-800 text-white relative">
                    <div className="p-4 text-xl text-center font-bold">&#60;SM/&#62;</div>
                    <nav className="mt-6">
                        {sidebarItems.map(item => (
                            <button
                                key={item.name}
                                className={`flex items-center p-3 w-full hover:bg-gray-700 ${activeTab === item.name ? 'bg-pink-500' : ''}`}
                                onClick={() => setActiveTab(item.name)}
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </button>
                        ))}
                    </nav>
                    <button
                        className="absolute top-2 right-2 text-xl"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ❌
                    </button>
                </div>
            )}
            {!isSidebarOpen && (
                <button
                    className="text-gray-800 bg-white p-2 text-2xl h-10 rounded-md m-2"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    ☰
                </button>
            )}
            <div className={`flex-grow bg-gray-100 p-1 ${isSidebarOpen ? '' : 'ml-0'}`}>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold">{activeTab}</div>
                    <input
                        type="text"
                        placeholder="Search here"
                        className="border rounded-lg p-2"
                    />
                </div>
                {activeTab === 'Dashboard' && <DashBoardData />}
                {activeTab === 'Profile' && <Profile />}
                {/* Uncomment and add more components as needed */}
                {activeTab === 'Settings' && <Settings />}
                {/* {activeTab === 'Bills' && <Bills />} */}
                {/* {activeTab === 'Expenses' && <Expenses />} */}
                {/* {activeTab === 'Goals' && <Goals />} */}
                {/* {activeTab === 'Settings' && <Settings />} */}
            </div>
        </div>
    );
}
export default DashBoard;