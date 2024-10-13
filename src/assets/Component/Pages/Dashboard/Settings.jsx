import { useState } from 'react';

const Settings = () => {
    const [settingsData, setSettingsData] = useState({
        notifications: true,
        darkMode: false,
        privacy: 'Public',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettingsData({
            ...settingsData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Settings updated successfully!');
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Notifications</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settingsData.notifications}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span>{settingsData.notifications ? 'Enabled' : 'Disabled'}</span>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Dark Mode</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settingsData.darkMode}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span>{settingsData.darkMode ? 'Enabled' : 'Disabled'}</span>
                    </div>
                </div>

                {/* Privacy Settings */}
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Privacy</label>
                    <select
                        name="privacy"
                        value={settingsData.privacy}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded w-full p-2"
                    >
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                        <option value="Friends">Friends Only</option>
                    </select>
                </div>

                {/* Change Password */}
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Change Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={settingsData.newPassword}
                        onChange={handleInputChange}
                        placeholder="New Password"
                        className="border border-gray-300 rounded w-full p-2 mb-2"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={settingsData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        className="border border-gray-300 rounded w-full p-2"
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="px-3 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300"
                    >
                        Save Settings
                    </button>
                    <button
                        type="button"
                        className="px-3 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300"
                        onClick={() => alert('Settings reset to default!')}
                    >
                        Reset Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
