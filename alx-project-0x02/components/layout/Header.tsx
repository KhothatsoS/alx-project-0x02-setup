import React from "react";

const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Villa",
    "Apartment",
];

const Header = () => {
    return (
        <header className="w-full border-b bg-white shadow-sm">
            {/* TOP BAR */}
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                    StayFinder
                </h1>

                {/* Search bar */}
                <div className="flex-1 mx-10">
                    <input
                        type="text"
                        placeholder="Search for properties..."
                        className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <button className="text-blue-600 hover:underline">Sign In</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* ACCOMMODATION TYPES */}
            <nav className="border-t bg-gray-50">
                <ul className="max-w-7xl mx-auto flex items-center gap-8 px-6 py-3 overflow-x-auto">
                    {accommodationTypes.map((type) => (
                        <li
                            key={type}
                            className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 whitespace-nowrap"
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
