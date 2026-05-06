import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    async function logout() {
        try {
            await fetch('https://api.freeapi.app/api/v1/users/logout', {
                method: 'POST',
            });

            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button className="nav-logout-btn" onClick={logout}>
            Logout
        </button>
    );
};

export default Logout;