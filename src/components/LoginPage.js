import React, { useState } from 'react';
import { authenticate } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await authenticate(formData);
            localStorage.setItem('token', data.token);
            navigate('/balance');
        } catch (error) {
            alert('login failed: ' + error);
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="username" placeholder="Email" value={formData.username} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
