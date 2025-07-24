import './Body.css';

export const Body = () => {
    const skills = [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'Next.js', level: 80, color: '#000000' },
        { name: 'CSS/SCSS', level: 85, color: '#1572B6' },
        { name: 'Node.js', level: 75, color: '#339933' }
    ];

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'React와 TypeScript로 구축한 반응형 쇼핑몰 플랫폼입니다. Redux로 상태관리를 하고 REST API를 연동했습니다.',
            tech: ['React', 'TypeScript', 'Redux', 'SCSS'],
            image: '/api/placeholder/400/250',
            github: 'https://github.com',
            demo: 'https://demo.com'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: '팀 협업을 위한 업무 관리 도구입니다. 드래그 앤 드롭 기능과 실시간 알림 시스템을 구현했습니다.',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
            image: '/api/placeholder/400/250',
            github: 'https://github.com',
            demo: 'https://demo.com'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: '날씨 API를 활용한 인터랙티브 대시보드입니다. 차트와 애니메이션으로 데이터를 시각화했습니다.',
            tech: ['React', 'Chart.js', 'CSS3', 'OpenWeather API'],
            image: '/api/placeholder/400/250',
            github: 'https://github.com',
            demo: 'https://demo.com'
        }
    ];

    const experiences = [
        {
            period: '2023.03 - 현재',
            company: 'Tech Company',
            position: 'Frontend Developer',
            description: 'React 기반 웹 애플리케이션 개발 및 유지보수를 담당하고 있습니다.',
            achievements: [
                '사용자 경험 개선으로 페이지 로딩 속도 40% 향상',
                '컴포넌트 재사용성 증대로 개발 효율성 30% 개선',
                '크로스 브라우저 호환성 이슈 해결'
            ]
        },
        {
            period: '2022.01 - 2023.02',
            company: 'Startup Inc',
            position: 'Junior Frontend Developer',
            description: '스타트업 환경에서 빠른 개발과 다양한 프로젝트 경험을 쌓았습니다.',
            achievements: [
                '모바일 퍼스트 반응형 웹사이트 구축',
                'REST API 연동 및 상태관리 구현',
                '코드 리뷰 프로세스 도입으로 코드 품질 향상'
            ]
        }
    ];

    return (
        <div className="body-container">
            {/* About Section */}
            <section id="about" className="section about-section">
                <div className="about-background">
                    <div className="about-image-overlay"></div>
                    <img 
                        src="/api/placeholder/1200/800" 
                        alt="Background" 
                        className="about-background-image"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                        }}
                    />
                </div>
                <div className="container">
                    <div className="about-content">
                        <div className="about-text-container">
                            <h2 className="about-title">About Me</h2>
                            <div className="about-text">
                                <p className="intro-text">
                                    안녕하세요! 안정성과 확장성을 중시하는 백엔드 개발자입니다.
                                </p>
                                <p>
                                    효율적인 데이터 흐름과 구조적인 설계를 지향하며, 
                                    유지보수가 용이한 서버 아키텍처를 구축하는 데 관심이 많습니다.
                                    Spring Boot와 MySQL을 주로 사용하여 신뢰할 수 있는 웹 애플리케이션 백엔드를 개발합니다.
                                </p>
                                <p>
                                    팀워크를 중시하며, 동료들과의 협업을 통해 더 나은 결과를 
                                    만들어내는 것을 즐깁니다.
                                </p>
                                <div className="about-cta">
                                    <button 
                                        className="cta-button"
                                        onClick={() => {
                                            const element = document.getElementById('projects');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        내 작업 보기
                                    </button>
                                    <button 
                                        className="cta-button secondary"
                                        onClick={() => {
                                            const element = document.getElementById('contact');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        연락하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section skills-section">
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress"
                                        style={{ 
                                            width: `${skill.level}%`,
                                            backgroundColor: skill.color 
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects-section">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <span>📋</span> Code
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <span>🔗</span> Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section experience-section">
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3 className="timeline-title">{exp.position}</h3>
                                        <span className="timeline-period">{exp.period}</span>
                                    </div>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                    <p className="timeline-description">{exp.description}</p>
                                    <ul className="timeline-achievements">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-content">
                        <p className="contact-text">
                            새로운 기회나 협업에 관심이 있으시다면 언제든 연락주세요!
                        </p>
                        <div className="contact-links">
                            <a href="mailto:isak9975@email.com" className="contact-link">
                                <span className="contact-icon">📧</span>
                                <span>isak9975@email.com</span>
                            </a>
                            <a href="https://github.com/isak9975" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-icon">🔗</span>
                                <span>GitHub</span>
                            </a>
                            <a href="https://velog.io/@isak9975/posts" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-icon">💼</span>
                                <span>Velog</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};