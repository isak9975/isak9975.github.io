import './SideBar.css';

export const SideBar = () => {
    const menuItems = [
        { id: 'about', label: 'About Me', icon: '👨‍💻' },
        { id: 'skills', label: 'Skills', icon: '🛠️' },
        { id: 'projects', label: 'Projects', icon: '📂' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'contact', label: 'Contact', icon: '📞' }
    ];

    const handleMenuClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                {/* 프로필 섹션 */}
                <div className="profile-section">
                    <div className="profile-image">
                        <img 
                            src="/profile.png"
                            alt="Profile" 
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="profile-placeholder hidden">
                            <span>👤</span>
                        </div>
                    </div>
                    <div className="profile-info">
                        <h2 className="profile-name">김이삭</h2>
                        <p className="profile-title">Backend Developer</p>
                    </div>
                </div>

                {/* 네비게이션 메뉴 */}
                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id} className="nav-item">
                                <button 
                                    className="nav-link"
                                    onClick={() => handleMenuClick(item.id)}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-text">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 소셜 링크 */}
                <div className="social-links">
                    <a href="https://github.com/isak9975" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>🔗</span>
                        <span>GitHub</span>
                    </a>
                    <a href="https://velog.io/@isak9975/posts" target="_blank" className="social-link">
                        <span>⚓</span>
                        <span>Velog</span>
                    </a>
                </div>
            </div>
        </div>
    );
};