<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sujan Guragain | DevOps & Cybersecurity Expert</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1e40af;
            --secondary: #7c3aed;
            --accent: #4f46e5;
            --light: #f8fafc;
            --dark: #0f172a;
            --text: #334155;
            --text-light: #64748b;
            --gray: #e2e8f0;
            --success: #10b981;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        body {
            background-color: #f8fafc;
            color: var(--text);
            line-height: 1.6;
            scroll-behavior: smooth;
        }
        
        /* Typography */
        h1, h2, h3, h4 {
            font-weight: 700;
            line-height: 1.2;
        }
        
        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
        }
        
        h2 {
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            margin-bottom: 2rem;
            position: relative;
            display: inline-block;
        }
        
        h2::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 2px;
        }
        
        p {
            margin-bottom: 1rem;
            color: var(--text-light);
        }
        
        a {
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
        }
        
        /* Layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        section {
            padding: 5rem 0;
        }
        
        /* Header & Navigation */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 0;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .logo span {
            color: var(--secondary);
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
        }
        
        .nav-links a {
            font-weight: 500;
            position: relative;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--dark);
        }
        
        /* Hero Section */
        #hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
            position: relative;
            overflow: hidden;
        }
        
        .hero-content {
            display: flex;
            align-items: center;
            gap: 3rem;
            position: relative;
            z-index: 1;
        }
        
        .hero-text {
            flex: 1;
        }
        
        .hero-image {
            flex: 1;
            position: relative;
        }
        
        .profile-image {
            width: 100%;
            max-width: 400px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            transition: transform 0.5s ease;
        }
        
        .profile-image:hover {
            transform: scale(1.03);
        }
        
        .title {
            font-size: 1.2rem;
            color: var(--primary);
            margin-bottom: 1rem;
            display: inline-block;
        }
        
        .social-icons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-3px);
        }
        
        .btn {
            display: inline-block;
            padding: 0.8rem 1.8rem;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            border-radius: 50px;
            font-weight: 600;
            margin-top: 1.5rem;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }
        
        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
            margin-left: 1rem;
        }
        
        .btn-outline:hover {
            background: var(--primary);
            color: white;
        }
        
        /* Experience Section */
        .experience-container {
            max-width: 900px;
            margin: 0 auto;
        }
        
        .experience-card {
            background-color: white;
            border-radius: 10px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border-left: 4px solid var(--primary);
        }
        
        .experience-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .experience-title {
            font-size: 1.3rem;
            color: var(--primary);
        }
        
        .experience-date {
            background-color: var(--light);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.9rem;
            color: var(--primary);
        }
        
        .experience-company {
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text);
        }
        
        .experience-description {
            color: var(--text-light);
        }
        
        .experience-description ul {
            padding-left: 1.2rem;
        }
        
        .experience-description li {
            margin-bottom: 0.8rem;
            position: relative;
        }
        
        .experience-description li::before {
            content: '▹';
            color: var(--primary);
            position: absolute;
            left: -1.2rem;
        }
        
        /* Skills & Technologies */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .skill-category {
            margin-bottom: 3rem;
        }
        
        .skill-category h3 {
            margin-bottom: 1rem;
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .skill-item {
            background-color: white;
            border-radius: 8px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .skill-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .skill-name {
            font-weight: 600;
        }
        
        /* Projects Section */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .project-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            position: relative;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .project-image {
            height: 200px;
            overflow: hidden;
        }
        
        .project-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image img {
            transform: scale(1.1);
        }
        
        .project-content {
            padding: 1.5rem;
        }
        
        .project-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--primary);
        }
        
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        
        .tech-tag {
            background-color: var(--light);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.8rem;
            color: var(--text-light);
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .hero-content {
                flex-direction: column;
            }
            
            .hero-text {
                order: 1;
                text-align: center;
            }
            
            .hero-image {
                order: 2;
                margin-bottom: 2rem;
            }
            
            .social-icons {
                justify-content: center;
            }
            
            .btn {
                display: block;
                width: fit-content;
                margin: 1.5rem auto 0;
            }
            
            .btn-outline {
                margin-left: 0;
                margin-top: 1rem;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .skills-container {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 576px) {
            .container {
                padding: 0 1.5rem;
            }
            
            section {
                padding: 3rem 0;
            }
            
            .experience-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="header">
        <div class="container">
            <nav>
                <a href="#" class="logo">Sujan<span>Guragain</span></a>
                <div class="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text fade-in">
                    <p class="title">DevOps Engineer & Cybersecurity Enthusiast</p>
                    <h1>Hi, I'm Sujan Guragain</h1>
                    <p>Passionate about building robust, scalable, and secure infrastructure solutions that drive organizational efficiency and innovation through cutting-edge DevOps practices and cybersecurity measures.</p>
                    <div class="social-icons">
                        <a href="https://github.com/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://x.com/IMVRG" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                    <a href="#contact" class="btn">Get In Touch</a>
                    <a href="#projects" class="btn btn-outline">View My Work</a>
                </div>
                <div class="hero-image fade-in delay-1">
                    <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Sujan Guragain" class="profile-image">
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <h2 class="fade-in">Professional Journey</h2>
            <div class="experience-container">
                <div class="experience-card fade-in">
                    <div class="experience-header">
                        <h3 class="experience-title">SysAdmin and DevOps Engineer</h3>
                        <span class="experience-date">June 2022 - Present</span>
                    </div>
                    <h4 class="experience-company">Chez Inspheris (Lively Software)</h4>
                    <div class="experience-description">
                        <ul>
                            <li>Architected and deployed enterprise-grade Intranet solutions enhancing organizational communication for 15+ clients</li>
                            <li>Engineered robust CI/CD pipelines using Jenkins, reducing deployment times by 60%</li>
                            <li>Managed Proxmox virtualization environment with 50+ VMs, achieving 99.9% uptime</li>
                            <li>Implemented secure HTTPD Reverse Proxy with ModSecurity, blocking 1000+ malicious requests daily</li>
                            <li>Conducted comprehensive security assessments using Nessus and OWASP ZAP, identifying and remediating critical vulnerabilities</li>
                            <li>Designed and deployed Grafana dashboards with Prometheus monitoring for real-time infrastructure insights</li>
                            <li>Configured IPSEC VPN solutions for secure remote access to corporate networks</li>
                            <li>Led a team of 3 junior engineers, improving team productivity by 40% through mentorship</li>
                        </ul>
                    </div>
                </div>
                
                <div class="experience-card fade-in delay-1">
                    <div class="experience-header">
                        <h3 class="experience-title">System Administrator</h3>
                        <span class="experience-date">July 2021 - June 2022</span>
                    </div>
                    <h4 class="experience-company">Genese Solution Pvt. Ltd.</h4>
                    <div class="experience-description">
                        <ul>
                            <li>Provided expert AWS Cloud Support to 50+ global clients, resolving 300+ complex technical issues</li>
                            <li>Automated deployment processes using AWS CodePipeline, reducing manual errors by 75%</li>
                            <li>Optimized MySQL database performance, improving query speeds by 3x for high-traffic applications</li>
                            <li>Implemented comprehensive security measures including IAM policies and security groups</li>
                            <li>Designed disaster recovery solutions reducing potential downtime by 90%</li>
                            <li>Mentored 2 sysadmin interns, preparing them for full-time DevOps roles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <div class="container">
            <h2 class="fade-in">Technical Expertise</h2>
            
            <div class="skill-category fade-in">
                <h3>DevOps & Cloud</h3>
                <div class="skills-container">
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fab fa-docker"></i>
                        </div>
                        <h4 class="skill-name">Docker</h4>
                        <p>Containerization</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-cubes"></i>
                        </div>
                        <h4 class="skill-name">Kubernetes</h4>
                        <p>Orchestration</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fab fa-aws"></i>
                        </div>
                        <h4 class="skill-name">AWS</h4>
                        <p>Cloud Infrastructure</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <h4 class="skill-name">Terraform</h4>
                        <p>IaC</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fab fa-jenkins"></i>
                        </div>
                        <h4 class="skill-name">Jenkins</h4>
                        <p>CI/CD</p>
                    </div>
                </div>
            </div>
            
            <div class="skill-category fade-in delay-1">
                <h3>Cybersecurity</h3>
                <div class="skills-container">
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h4 class="skill-name">Nessus</h4>
                        <p>Vulnerability Scanning</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        <h4 class="skill-name">OWASP ZAP</h4>
                        <p>Web App Security</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <h4 class="skill-name">IPSEC VPN</h4>
                        <p>Secure Networking</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-user-secret"></i>
                        </div>
                        <h4 class="skill-name">ModSecurity</h4>
                        <p>WAF</p>
                    </div>
                </div>
            </div>
            
            <div class="skill-category fade-in delay-2">
                <h3>Monitoring & Databases</h3>
                <div class="skills-container">
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h4 class="skill-name">Grafana</h4>
                        <p>Visualization</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <h4 class="skill-name">MySQL</h4>
                        <p>Database Admin</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-bell"></i>
                        </div>
                        <h4 class="skill-name">Prometheus</h4>
                        <p>Monitoring</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        <h4 class="skill-name">Nagios</h4>
                        <p>Alerting</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <div class="container">
            <h2 class="fade-in">Key Projects</h2>
            <div class="projects-grid">
                <div class="project-card fade-in">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CI/CD Pipeline">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Jenkins CI/CD Pipeline</h3>
                        <p>Automated build, test and deployment pipeline reducing release cycles from days to hours</p>
                        <div class="project-tech">
                            <span class="tech-tag">Jenkins</span>
                            <span class="tech-tag">Docker</span>
                            <span class="tech-tag">Kubernetes</span>
                            <span class="tech-tag">Git</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card fade-in delay-1">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80" alt="Security Assessment">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Security Assessment Framework</h3>
                        <p>Comprehensive vulnerability scanning and penetration testing solution</p>
                        <div class="project-tech">
                            <span class="tech-tag">Nessus</span>
                            <span class="tech-tag">OWASP ZAP</span>
                            <span class="tech-tag">Metasploit</span>
                            <span class="tech-tag">Burp Suite</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card fade-in delay-2">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Monitoring Dashboard">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Grafana Monitoring System</h3>
                        <p>Real-time infrastructure monitoring with custom dashboards and alerts</p>
                        <div class="project-tech">
                            <span class="tech-tag">Grafana</span>
                            <span class="tech-tag">Prometheus</span>
                            <span class="tech-tag">Node Exporter</span>
                            <span class="tech-tag">Alertmanager</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card fade-in delay-3">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="VPN Setup">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">IPSEC VPN Infrastructure</h3>
                        <p>Secure remote access solution for distributed teams</p>
                        <div class="project-tech">
                            <span class="tech-tag">IPSEC</span>
                            <span class="tech-tag">OpenVPN</span>
                            <span class="tech-tag">WireGuard</span>
                            <span class="tech-tag">PKI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="background-color: #f1f5f9;">
        <div class="container">
            <h2 class="fade-in">Let's Connect</h2>
            <p class="fade-in" style="text-align: center; max-width: 700px; margin: 0 auto 3rem;">I'm actively seeking new opportunities and collaborations. Whether you have a project to discuss or just want to connect, feel free to reach out!</p>
            
            <div style="display: flex; justify-content: center;">
                <a href="mailto:guragain.sujan11@gmail.com" class="btn" style="font-size: 1.1rem; padding: 1rem 2rem;">Email Me</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div style="text-align: center;">
                <a href="#" class="logo" style="color: white; font-size: 1.8rem;">Sujan<span style="color: var(--accent);">Guragain</span></a>
                <div class="social-icons" style="justify-content: center; margin: 2rem 0;">
                    <a href="https://github.com/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://x.com/IMVRG" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
                <p style="color: var(--gray);">© 2025 Sujan Guragain. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('header').style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    </script>
</body>
</html>
