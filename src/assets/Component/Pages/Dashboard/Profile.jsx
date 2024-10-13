import { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1 234 567 890',
        address: '1234 Main St, Cityville, USA',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Save updated profile data here (e.g., make API call)
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>

            {!isEditing ? (
                <div >
                    <div className="mb-4">
                        <p className="font-semibold">Name:</p>
                        <p>{profileData.name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Email:</p>
                        <p>{profileData.email}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Phone:</p>
                        <p>{profileData.phone}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Address:</p>
                        <p>{profileData.address}</p>
                    </div>
                    <button
                        className="px-12 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Profile
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="font-semibold block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold block mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold block mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={profileData.address}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button
                            type="submit"
                            className="px-12 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="px-12 md:px-20 py-2 border-[1px] border-black hover:bg-gray-200 hover:border-gray-300"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Profile;
