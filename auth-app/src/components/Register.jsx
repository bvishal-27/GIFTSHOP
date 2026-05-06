import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'ADMIN' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    async function register(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://api.freeapi.app/api/v1/users/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const res = await response.json();
            console.log(res);
            if (response.ok) navigate('/login');
            else setMessage("Registration failed. Try a different username.");
        } catch (error) {
            setMessage("Network error occurred.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-card">
            <h1>Create Account</h1>
            <p>Join our developer community</p>
            <form onSubmit={register}>
                <input className="counter" name="username" placeholder="Username" onChange={handleChange} required />
                <input className="counter" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input className="counter" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" disabled={loading}>
                    {loading ? "Creating Account..." : "Register"}
                </button>
                {message && <p className="error-msg">{message}</p>}
            </form>
        </div>
    );
};

export default Register;