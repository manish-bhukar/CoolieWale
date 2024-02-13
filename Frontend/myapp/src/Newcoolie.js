import React, { useState } from 'react';
import swl from 'sweetalert';
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const PostForm = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [badgenumber, setBadgeNumber] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [pic, setPic] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPic(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const imageRef = ref(storage, `images/${uuidv4()}`);
            await uploadBytes(imageRef, pic);
            const downloadURL = await getDownloadURL(imageRef);

            const postData = {
                name: name,
                rating: rating,
                badgenumber: badgenumber,
                contactnumber: contactnumber,
                experience: experience,
                location: location,
                pic: downloadURL
            };

            const response = await fetch('http://localhost:2000/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                console.error('Failed to submit data to MongoDB');
                return;
            }

            console.log('Data submitted successfully');
            setName('');
            setRating('');
            setBadgeNumber('');
            setContactNumber('');
            setExperience('');
            setLocation('');
            swl({
                title: "Successfully created",
                text: "This is a sweetalert dialog",
                icon: "success",
                iconColor: "green",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.error('Error occurred while submitting data:', error);
            swl({
                title: "Error occur",
                text: "This is a sweetalert dialog",
                icon: "error",
                iconColor: "green",
                confirmButtonText: "Ok"
            });
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
                    <label htmlFor="badgenumber" className="block text-gray-700 font-bold mb-2">Badge Number:</label>
                    <input type="text" id="badgeNumber" name="badgeNumber" value={badgenumber} onChange={(e) => setBadgeNumber(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Badge Number" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="contactnumber" className="block text-gray-700 font-bold mb-2">Contact Number:</label>
                    <input type="text" id="contactNumber" name="contactNumber" value={contactnumber} onChange={(e) => setContactNumber(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contact Number" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience:</label>
                    <textarea id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Experience" required />
                </div>
                <div className="mb-4 text-left">
                    <label htmlFor="pic" className="block text-gray-700 font-bold mb-2">Picture:</label>
                    <input type="file" id="pic" name="pic" onChange={handleFileChange} accept="image/*" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
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
