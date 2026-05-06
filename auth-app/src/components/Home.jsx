import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="auth-card">
            <h1 style={{ color: 'var(--text-main)' }}>Auth App</h1>
            <p>A secure platform built with React and FreeAPI.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <Link to="/login" style={{ flex: 1 }}>
                    <button>Login</button>
                </Link>
                <Link to="/register" style={{ flex: 1 }}>
                    <button style={{ backgroundColor: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }}>
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;