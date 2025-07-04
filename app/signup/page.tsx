'use client'
import React from 'react'
import signup from '../actions/signup/signup' // Importing the signup action
import { useRouter } from 'next/navigation';

function Signup() {
   const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');
   const router = useRouter(); // Using Next.js router for navigation

    return (
        // Outer container to center the sign-in form on the screen
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-gray-800">
            {/* Card container for the sign-in form */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                {/* Sign-in header */}
                <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
                
                {/* Form elements container with gap between items */}
                <div className="flex flex-col gap-4">
                    {/* Input field for entering the username */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    {/* Input field for entering the password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Submit button to send the sign-in request */}
                    <button
                        onClick={ async() => {
                            // Sending a POST request to the backend API for sign-in
                            const response = await signup(username, password);
                            // Handling the response from the sign-in request
                            if (response) {
                                // If the response is successful, redirect or show a success message
                                console.log(response); // Logging the response data
                                if (response) {
                                    // Redirecting to the home page after successful signup
                                    router.push('/api/auth/signin');
                                } else {
                                    // Handle error case, e.g., show an error message
                                    console.error("Signup failed:", response);
                                }
                                
                            }
                            
                        }}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup