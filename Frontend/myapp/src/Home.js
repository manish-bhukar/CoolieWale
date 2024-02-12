import React from 'react';
import { Link } from 'react-router-dom';

const NewPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 transition-all duration-1000">
            <div className="max-w-md w-full">
                <div className="bg-white shadow-md rounded-lg px-8 py-6">
                    <h2 className="text-3xl text-center mb-6 font-bold text-gray-800">Welcome to Coolie-wale</h2>
                    <div className="flex justify-center mb-8">
                        <Link to="/addcoolie"> 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4" type="submit">
                                Add Coolie
                            </button>
                        </Link>
                        <Link to="/allusers">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Existing Coolie
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPage;
