import React, { useState } from 'react';
import { signup } from '../api/signup';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [formData, setFormData] = useState({ username: '', password: '', firstname: '', lastname: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            navigate('/login');
        } catch (error) {
            alert('Signup failed: ' + error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="username" placeholder="Email" value={formData.username} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignupPage;
