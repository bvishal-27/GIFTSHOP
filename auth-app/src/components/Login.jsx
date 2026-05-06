import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    async function login(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://api.freeapi.app/api/v1/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.data.accessToken);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                navigate('/profile');
            } else {
                setMessage(data.message || "Invalid credentials.");
            }
        } catch (error) {
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-card">
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your profile</p>
            <form onSubmit={login}>
                <input 
                    className="counter" 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    className="counter" 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Authenticating..." : "Sign In"}
                </button>
                {message && <p className="error-msg">{message}</p>}
            </form>
        </div>
    );
};

export default Login;