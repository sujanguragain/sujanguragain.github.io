<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sujan Guragain | DevOps & Cybersecurity Professional</title>
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
        
        /* About Section */
        #about {
            background-color: white;
        }
        
        .about-content {
            display: flex;
            gap: 3rem;
            align-items: center;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-image {
            flex: 1;
        }
        
        .about-image img {
            width: 100%;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .contact-info {
            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-light);
        }
        
        .contact-item i {
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        /* Skills Section */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .skill-card {
            background-color: white;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .skill-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        /* Experience Section */
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 0;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            width: 2px;
            background-color: var(--gray);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
        }
        
        .timeline-item {
            padding: 1rem 2rem;
            position: relative;
            width: 50%;
            box-sizing: border-box;
        }
        
        .timeline-item:nth-child(odd) {
            left: 0;
        }
        
        .timeline-item:nth-child(even) {
            left: 50%;
        }
        
        .timeline-content {
            padding: 1.5rem;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        
        .timeline-item:nth-child(odd) .timeline-content::after {
            content: '';
            position: absolute;
            right: -10px;
            top: 20px;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid white;
        }
        
        .timeline-item:nth-child(even) .timeline-content::after {
            content: '';
            position: absolute;
            left: -10px;
            top: 20px;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 10px solid white;
        }
        
        .timeline-date {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .timeline-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        
        .timeline-company {
            color: var(--text-light);
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        
        .timeline-desc {
            color: var(--text-light);
            font-size: 0.95rem;
        }
        
        .timeline-desc ul {
            padding-left: 1.2rem;
        }
        
        .timeline-desc li {
            margin-bottom: 0.5rem;
        }
        
        .timeline-item:nth-child(odd)::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            right: -10px;
            background-color: var(--primary);
            border-radius: 50%;
            top: 20px;
            z-index: 1;
        }
        
        .timeline-item:nth-child(even)::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            left: -10px;
            background-color: var(--primary);
            border-radius: 50%;
            top: 20px;
            z-index: 1;
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
        }
        
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        
        .tech-tag {
            background-color: var(--gray);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.8rem;
            color: var(--text-light);
        }
        
        /* Contact Section */
        .contact-container {
            display: flex;
            gap: 3rem;
            margin-top: 2rem;
        }
        
        .contact-info-card {
            flex: 1;
            background-color: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .contact-form {
            flex: 1;
            background-color: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid var(--gray);
            border-radius: 5px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }
        
        .submit-btn {
            width: 100%;
            padding: 0.8rem;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 3rem 0;
            text-align: center;
        }
        
        .footer-content {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .footer-links a {
            color: var(--gray);
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .copyright {
            color: var(--gray);
            font-size: 0.9rem;
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
            .hero-content, .about-content {
                flex-direction: column;
            }
            
            .hero-text, .about-text {
                order: 1;
                text-align: center;
            }
            
            .hero-image, .about-image {
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
            
            .timeline::before {
                left: 30px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 0;
            }
            
            .timeline-item:nth-child(even) {
                left: 0;
            }
            
            .timeline-item:nth-child(odd)::before, 
            .timeline-item:nth-child(even)::before {
                left: 20px;
            }
            
            .timeline-item:nth-child(odd) .timeline-content::after, 
            .timeline-item:nth-child(even) .timeline-content::after {
                left: -10px;
                border-right: 10px solid white;
                border-left: none;
            }
            
            .contact-container {
                flex-direction: column;
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
        }
        
        @media (max-width: 576px) {
            .container {
                padding: 0 1.5rem;
            }
            
            section {
                padding: 3rem 0;
            }
            
            .skills-container {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 1rem;
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
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
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
                    <p>Passionate about building robust, scalable, and secure infrastructure solutions that drive organizational efficiency and innovation.</p>
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

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2 class="fade-in">About Me</h2>
            <div class="about-content">
                <div class="about-text fade-in">
                    <p>I'm a passionate tech professional with expertise in system administration, DevOps practices, and cybersecurity. I'm committed to implementing robust, scalable, and secure infrastructure solutions that drive organizational efficiency.</p>
                    <p>With several years of hands-on experience, I've worked with diverse technologies and platforms to deliver high-quality solutions for clients worldwide.</p>
                    <p>I'm currently pursuing my Master's in Information Technology and Cybersecurity while working as a SysAdmin and DevOps Engineer at Chez Inspheris (Lively Software).</p>
                    
                    <div class="contact-info">
                        <a href="mailto:guragain.sujan11@gmail.com" class="contact-item">
                            <i class="fas fa-envelope"></i> guragain.sujan11@gmail.com
                        </a>
                        <a href="tel:+9779842761231" class="contact-item">
                            <i class="fas fa-phone"></i> +977-9842761231
                        </a>
                        <a href="#" class="contact-item">
                            <i class="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                        </a>
                    </div>
                </div>
                <div class="about-image fade-in delay-1">
                    <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="About Sujan Guragain">
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <div class="container">
            <h2 class="fade-in">Technical Skills</h2>
            <div class="skills-container">
                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <i class="fab fa-linux"></i>
                    </div>
                    <h3>Linux</h3>
                    <p>System Administration</p>
                </div>
                <div class="skill-card fade-in delay-1">
                    <div class="skill-icon">
                        <i class="fab fa-docker"></i>
                    </div>
                    <h3>Docker</h3>
                    <p>Containerization</p>
                </div>
                <div class="skill-card fade-in delay-2">
                    <div class="skill-icon">
                        <i class="fas fa-cubes"></i>
                    </div>
                    <h3>Kubernetes</h3>
                    <p>Container Orchestration</p>
                </div>
                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3>Ansible</h3>
                    <p>Configuration Management</p>
                </div>
                <div class="skill-card fade-in delay-1">
                    <div class="skill-icon">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h3>Terraform</h3>
                    <p>Infrastructure as Code</p>
                </div>
                <div class="skill-card fade-in delay-2">
                    <div class="skill-icon">
                        <i class="fab fa-aws"></i>
                    </div>
                    <h3>AWS</h3>
                    <p>Cloud Services</p>
                </div>
                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3>MySQL</h3>
                    <p>Database Management</p>
                </div>
                <div class="skill-card fade-in delay-1">
                    <div class="skill-icon">
                        <i class="fab fa-jenkins"></i>
                    </div>
                    <h3>Jenkins</h3>
                    <p>CI/CD Pipelines</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <h2 class="fade-in">Work Experience</h2>
            <div class="timeline">
                <div class="timeline-item fade-in">
                    <div class="timeline-content">
                        <div class="timeline-date">June 2022 - Present</div>
                        <h3 class="timeline-title">SysAdmin and DevOps Engineer</h3>
                        <p class="timeline-company">Chez Inspheris (Lively Software)</p>
                        <div class="timeline-desc">
                            <ul>
                                <li>Developed and deployed an Intranet solution for clients, improving organizational communication.</li>
                                <li>Established and maintained CICD pipelines using Jenkins.</li>
                                <li>Managed Proxmox VMs and Hosts, ensuring a stable server infrastructure.</li>
                                <li>Set up HTTPD Reverse Proxy with added security using ModSecurity.</li>
                                <li>Conducted stress testing with JMeter and implemented Nessus Pen Testing.</li>
                                <li>Configured AWS SES for email communication and Route 53 for DNS management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="timeline-item fade-in delay-1">
                    <div class="timeline-content">
                        <div class="timeline-date">July 2021 - June 2022</div>
                        <h3 class="timeline-title">System Administrator</h3>
                        <p class="timeline-company">Genese Solution Pvt. Ltd.</p>
                        <div class="timeline-desc">
                            <ul>
                                <li>Provided AWS Cloud Support to multi-diverse customers worldwide.</li>
                                <li>Implemented CICD using AWS Code Commit and Code Deploy.</li>
                                <li>Installed and configured WHM server for clients and managed DNS records.</li>
                                <li>Set up Google Workspace Email and conducted Email Migration.</li>
                                <li>Demonstrated strong understanding of AWS Product and Service suite.</li>
                                <li>Monitored deployments using AWS Cloudwatch and Nagios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <div class="container">
            <h2 class="fade-in">Featured Projects</h2>
            <div class="projects-grid">
                <div class="project-card fade-in">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Ecommerce Web Application">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Highly Available Ecommerce Web App</h3>
                        <p>Architected a resilient cloud-based ecommerce solution with AWS services.</p>
                        <div class="project-tech">
                            <span class="tech-tag">AWS</span>
                            <span class="tech-tag">CloudWatch</span>
                            <span class="tech-tag">CloudTrail</span>
                        </div>
                    </div>
                </div>
                <div class="project-card fade-in delay-1">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="Nagios Setup">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Nagios Xi Setup</h3>
                        <p>Implemented comprehensive monitoring solution for client infrastructure.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Nagios</span>
                            <span class="tech-tag">Ubuntu</span>
                            <span class="tech-tag">Monitoring</span>
                        </div>
                    </div>
                </div>
                <div class="project-card fade-in delay-2">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Intranet Solution">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Client Intranet Solution</h3>
                        <p>Developed and deployed a secure intranet platform for organizational communication.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">Tomcat</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">Elasticsearch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2 class="fade-in">Get In Touch</h2>
            <p class="fade-in">I'm always open to discussing new projects, opportunities, or partnerships.</p>
            <div class="contact-container">
                <div class="contact-info-card fade-in">
                    <h3>Contact Information</h3>
                    <div class="contact-info" style="margin-top: 1.5rem;">
                        <div class="contact-item" style="margin-bottom: 1.5rem;">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>guragain.sujan11@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-item" style="margin-bottom: 1.5rem;">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <p>+977-9842761231</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form fade-in delay-1">
                    <form action="#" method="POST">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" class="form-control" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <a href="#" class="logo" style="color: white; font-size: 1.8rem;">Sujan<span style="color: var(--accent);">Guragain</span></a>
                <div class="footer-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="social-icons">
                    <a href="https://github.com/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sujanguragain/" class="social-icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://x.com/IMVRG" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
                <p class="copyright">© 2025 Sujan Guragain. All Rights Reserved.</p>
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
       
