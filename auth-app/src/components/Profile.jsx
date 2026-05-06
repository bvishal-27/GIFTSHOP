import { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://api.freeapi.app/api/v1/users/current-user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json();
            if (response.ok) {
                setUser(result.data);
            } else {
                setUser(null);
            }
        };
        if (token) fetchUser();
    }, [token]);

    if (!token) {
        return (
            <div className="auth-card">
                <p style={{ color: 'var(--error)' }}>Access Denied</p>
                <p>Please login first to view this page.</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Retrieving secure profile...</p>
            </div>
        );
    }

    const avatarSrc = user.avatar.url.includes('placeholder')
        ? `https://ui-avatars.com/api/?name=${user.username}&background=0ea5e9&color=fff`
        : user.avatar.url;

    return (
        <div className="profile-card">
            <div className="avatar-container">
                <img src={avatarSrc} alt="Profile" />
            </div>
            
            <h2 className="profile-name">{user.username}</h2>
            <p style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>Verified User</p>

            <div className="profile-details-list">
                <div className="detail-row">
                    <span className="detail-label">Email Address</span>
                    <span className="detail-value">{user.email}</span>
                </div>
                
                <div className="detail-row">
                    <span className="detail-label">Access Level</span>
                    <span className="detail-value" style={{ color: 'var(--primary)' }}>
                        {user.role}
                    </span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Status</span>
                    <span className="detail-value" style={{ color: '#10b981' }}>Active</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;