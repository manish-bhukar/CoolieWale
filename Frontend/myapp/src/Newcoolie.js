import React, { useState } from 'react';
import swl from 'sweetalert';
const PostForm = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [badgenumber, setBadgeNumber] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [experience, setExperience] = useState('');
    const [pic, setPic] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            name,
            rating,
            badgenumber,
            contactnumber,
            experience,
            pic,
            location
        };

        try {
            const response = await fetch('http://localhost:2000/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
                });

            if (response.ok) {
                console.log('Data submitted successfully');
                setName('');
                setRating('');
                setBadgeNumber('');
                setContactNumber('');
                setExperience('');
                setPic('');
                setLocation('');
                swl({
                    title:"Successfully created",
                    text:"This is a sweetalert dialog",
                    icon: "success",
                    iconColor: "green",
                    confirmButtonText: "Ok",
                    
                })
            } else {
              
                console.error('Failed to submit data');
            }
        } catch (error) {
            swl({
                title:"Error occur",
                text:"This is a sweetalert dialog",
                icon: "error",
                iconColor: "green",
                confirmButtonText: "Ok"
            })
            console.error('Error occurred while submitting data:', error)

        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
            <form onSubmit={handleSubmit} className="max-w-xl w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Add a new Coolie</h2>
                <div className="mb-4 text-left">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating:</label>
                    <input type="number" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rating (1-5)" min="1" max="5" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="badgeNumber" className="block text-gray-700 font-bold mb-2">Badge Number:</label>
                    <input type="text" id="badgeNumber" name="badgeNumber" value={badgenumber} onChange={(e) => setBadgeNumber(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Badge Number" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">Contact Number:</label>
                    <input type="text" id="contactNumber" name="contactNumber" value={contactnumber} onChange={(e) => setContactNumber(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contact Number" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience:</label>
                    <textarea id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Experience" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="pic" className="block text-gray-700 font-bold mb-2">Picture:</label>
                    <input type="text" id="pic" name="pic" value={pic} onChange={(e) => setPic(e.target.value)} accept="image/*" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Location" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
