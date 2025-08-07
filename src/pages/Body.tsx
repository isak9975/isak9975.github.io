import './Body.css';

export const Body = () => {
    const skills = [

        {
            name: 'Java',
            color: '#E76F00',
            icon: <i className="devicon-java-plain colored" style={{ fontSize: '36px' }}></i>,
            description: 'Type-safe JavaScript'
        },
        {
            name: 'JavaScript',
            color: '#F7DF1E',
            icon: <i className="devicon-javascript-plain colored" style={{ fontSize: '36px' }}></i>,
            description: 'Programming Language'
        },
        {
            name: 'Spring',
            color: '#339933',
            icon: <i className="devicon-spring-original colored" style={{ fontSize: '36px' }}></i>,
            description: 'Java Backend Framework'
        },
        {
            name: 'React',
            color: '#61DAFB',
            icon: <i className="devicon-react-original-wordmark colored" style={{ fontSize: '36px' }}></i>,
            description: 'Frontend Framework'
        },
        {
            name: 'ReactNative',
            color: '#61DAFB',
            icon: <i className="devicon-react-original colored" style={{ fontSize: '36px' }}></i>, // React 아이콘 재사용
            description: 'Mobile Frontend Framework'
        },
        {
            name: 'CSS/SCSS',
            color: '#1572B6',
            icon: <i className="devicon-css3-plain colored" style={{ fontSize: '36px' }}></i>,
            description: 'Styling'
        },
        {
            name: 'Node.js',
            color: '#339933',
            icon: <i className="devicon-nodejs-plain-wordmark colored" style={{ fontSize: '36px' }}></i>,
            description: 'Backend Runtime'
        },
        {
            name: 'MySQL',
            color: '#00758F',
            icon: <i className="devicon-mysql-original colored" style={{ fontSize: '36px' }}></i>,
            description: 'Relational Database'
        },
        {
            name: 'Github',
            color: '#000000',
            icon: <i className="devicon-github-original colored" style={{ fontSize: '36px' }}></i>,
            description: 'Version Control Platform'
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'TeamProject-OMR',
            description: '팀 프로젝트로 개발한 영화 및 OTT 리뷰 통합 플랫폼입니다. 작품별 정보와 리뷰를 제공하며, AI 기반 추천 시스템을 통해 개인 맞춤형 콘텐츠를 제안합니다. React Native로 크로스 플랫폼 환경을 구현했습니다.',
            tech: ['ReactNative', 'Spring Boot', 'MySQL', 'AWS-RDS'],
            image: '/projecting.jpg',
            github: 'https://github.com/guensoo/TeamProject-OMR/tree/Develop',
            demo: ''
        },
        {
            id: 2,
            title: 'TeamProject-UKA',
            description: '팀 프로젝트로 진행한 유기동물 입양 플랫폼입니다. 공공데이터 포털의 API를 기반으로 유기동물 정보를 제공하며, 입양 절차를 단계별로 안내합니다. 실시간 채팅과 반응형 UI도 구현하여 사용자 편의성을 높였습니다.',
            tech: ['React', 'Spring Boot', 'MySQL', 'AWS-S3', 'AWS-RDS', 'AWS-EC2'],
            image: '/teamproject-uka.jpg',
            github: 'https://github.com/hms1218/TeamProject-UKA/tree/develop',
            demo: 'http://teamproject-uka.s3-website.ap-northeast-2.amazonaws.com/'
        },
        {
            id: 3,
            title: 'HomeProject',
            description: '이력서 발송 기능과 게시판을 포함한 개인 블로그입니다. React와 Spring Boot 기반으로 개발하고, AWS를 통해 배포했습니다.',
            tech: ['React', 'Spring Boot', 'MySQL', 'AWS-S3', 'AWS-RDS', 'AWS-EC2'],
            image: '/homeproject.jpg',
            github: 'https://github.com/isak9975/HomeProject',
            demo: 'http://homeproject-back.s3-website.ap-northeast-2.amazonaws.com/'
        },
        {
            id: 4,
            title: 'Github Pages',
            description: 'React와 TypeScript로 개발한 개인 포트폴리오 사이트입니다. Github Pages를 통해 배포했습니다.',
            tech: ['React', 'TypeScript', 'Github'],
            image: '/github.jpg',
            github: 'https://github.com',
            demo: 'https://demo.com'
        }
    ];

    const experiences = [
        {
            period: '2024.10 - 현재',
            company: '코리아 it 아카데미 - 인천 ',
            position: '풀스택 개발 과정 수강 (AWS 기반)',
            description: 'React 기반 웹 애플리케이션 개발 및 유지보수를 학습하며 프로젝트를 진행하고 있습니다.',
            achievements: [

            ]
        },
        {
            period: '2021.04 - 2024.10',
            company: '삼원 하이텍',
            position: '품질관리담당자',
            description: '생산 품질 관리 업무를 수행하며 데이터 기반 분석 경험을 쌓았습니다.',
            achievements: [

            ]
        },
        {
            period: '2019.02 - 2021.02',
            company: '사회복무요원 (아동센터)',
            position: '행정 및 교육 지원',
            description: '아동센터에서 사회복무요원으로 근무하며 아동 대상 학습 보조와 행정 업무 지원을 수행했습니다.',
            achievements: [
                '우수 복무요원으로 선정되어 관련 기사에 이름 게재'
            ]
        },
        {
            period: '2016.03 - 2024.10',
            company: '부천 대학교',
            position: '전자과 심화과정 졸업',
            description: '전자공학 전공으로 회로 설계, C언어 등을 중심으로 학습하였습니다.',
            achievements: [
            ]
        },
    ];

    return (
        <div className="body-container">
            {/* About Section */}
            <section id="about" className="section about-section">
                <div className="about-background">
                    <div className="about-image-overlay"></div>
                    <img
                        // src="/api/placeholder/1200/800"
                        src="/main.jpg"
                        alt="Background"
                        className="about-background-image"
                        // onError={(e) => {
                        //     const target = e.target as HTMLImageElement;
                        //     target.style.display = 'none';
                        // }}
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
                                    효율적인 데이터 흐름과 구조적인 설계를 바탕으로,
                                    유지보수가 쉬운 서버 아키텍처를 구축하고
                                    신뢰할 수 있는 웹 백엔드를 개발하는 데 집중하고 있습니다.
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
                                        프로젝트 보기
                                    </button>
                                    <button
                                        className="cta-button"
                                        onClick={() => {
                                            const element = document.getElementById('contact');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        연락하기
                                    </button>
                                    <a href="https://velog.io/@isak9975/posts" target="_blank" rel="noopener noreferrer" className="contact-link-velog" >
                                        <span className="contact-icon" >💼</span>
                                        <span>Velog</span>
                                    </a>
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
                    <div className="skills-badges">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-badge"
                                style={{
                                    '--skill-color': skill.color,
                                    '--skill-color-light': skill.color + '20'
                                } as React.CSSProperties}
                            >
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-description">{skill.description}</span>
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
                                            {project.demo ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <span>🔗</span> Demo
                                            </a> : ''}
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