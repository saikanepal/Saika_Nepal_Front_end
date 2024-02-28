import React, { useState } from 'react';
import DashboardWrapper from '../Global/DashboardWrapper';
import request from '../../Utils/HttpRequests';
import { useSelector } from "react-redux";

const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [userClass, setUserClass] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const token = useSelector((state) => state.authState.token);

    const handleCreateUser = async () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }
        setEmailError('');
        if (userClass === 'senior') {
            if (window.confirm('Are you sure you want to create a senior user?')) {
                createUser();
            }
        } else {
            createUser();
        }
    };

    const createUser = async () => {
        setLoading(true);
        try {
            const response = await request.post("/api/user/createUser", {
                firstname: firstName,
                lastname: lastName,
                username: email,
                password,
                userclass: userClass,
                address,
                phonenumber: phoneNumber
            }, request.generateConfigData("application/json", token));

            if (response.status) {
                setResponseMessage('New user created');
            } else {
                setResponseMessage(response.message);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            setResponseMessage('An error occurred while creating user');
        }
        setLoading(false);
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <DashboardWrapper>
            <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white mb-6">Add User</h2>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={`border border-gray-500 rounded-md p-2 bg-gray-700 text-white ${emailError ? 'border-red-500' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center text-white">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label>Show Password</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <select
                        className="border border-gray-500 rounded-md p-2 bg-gray-700 text-white"
                        value={userClass}
                        onChange={(e) => setUserClass(e.target.value)}
                    >
                        <option value="">Select User Class</option>
                        <option value="senior">Senior</option>
                        <option value="student">Junior</option>
                        <option value="intern">Intern</option>
                    </select>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                        onClick={handleCreateUser}
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create User'}
                    </button>
                    {responseMessage && <p className="text-white">{responseMessage}</p>}
                </div>
            </div>
        </DashboardWrapper>
    );
};

export default AddUser;
