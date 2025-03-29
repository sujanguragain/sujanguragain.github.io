<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sujan Guragain - DevOps Engineer & Cybersecurity Enthusiast</title>
    <style>
        :root {
            --primary: #1e3a8a;
            --secondary: #0284c7;
            --accent: #0ea5e9;
            --light: #f8fafc;
            --dark: #0f172a;
            --text: #334155;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f1f5f9;
            color: var(--text);
            line-height: 1.6;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://via.placeholder.com/1500x500') center/cover;
            opacity: 0.1;
            z-index: 0;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .title-bar {
            display: inline-block;
            font-size: 1.2rem;
            padding: 0.5rem 0;
            position: relative;
        }
        
        .title-bar::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background-color: var(--accent);
            margin: 0.8rem auto 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
            padding: 2rem;
            margin-bottom: 2rem;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        
        .profile-section {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 1rem;
        }
        
        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--accent);
        }
        
        .section-title {
            color: var(--primary);
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background-color: var(--accent);
            margin-top: 0.5rem;
        }
        
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .skill-item {
            text-align: center;
            transition: transform 0.3s;
        }
        
        .skill-item:hover {
            transform: scale(1.1);
        }
        
        .skill-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 0.5rem;
        }
        
        .skill-name {
            font-weight: 500;
        }
        
        .btn {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background-color: var(--accent);
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            transition: all 0.3s;
            margin-top: 1rem;
        }
        
        .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .experience-item {
            margin-bottom: 2rem;
            position: relative;
            padding-left: 1.5rem;
            border-left: 2px solid var(--accent);
        }
        
        .experience-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .experience-company {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .experience-date {
            font-size: 0.9rem;
            color: #64748b;
            margin-bottom: 1rem;
        }
        
        .experience-description ul {
            list-style-type: none;
            padding-left: 0;
        }
        
        .experience-description li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .experience-description li::before {
            content: "•";
            color: var(--accent);
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .education-item {
            margin-bottom: 1.5rem;
        }
        
        .education-degree {
            font-weight: 600;
            margin-bottom: 0.3rem;
        }
        
        .education-institution {
            font-size: 0.95rem;
        }
        
        .education-year {
            font-size: 0.9rem;
            color: #64748b;
        }
        
        .certifications-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .certification-badge {
            background-color: #f1f5f9;
            border-radius: 4px;
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--primary);
            border-left: 3px solid var(--accent);
            transition: transform 0.3s;
        }
        
        .certification-badge:hover {
            transform: translateY(-3px);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        
        .personal-qualities {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .quality-item {
            background-color: #f8fafc;
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
            transition: all 0.3s;
        }
        
        .quality-item:hover {
            background-color: var(--accent);
            color: white;
            transform: scale(1.05);
        }
        
        .project-item {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .project-title {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 2rem;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            transition: transform 0.3s;
            filter: brightness(0) invert(1);
        }
        
        .social-icon:hover {
            transform: scale(1.2);
        }
        
        .contact-info {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .contact-item {
            display: inline-flex;
            align-items: center;
            margin: 0 1rem;
            color: var(--text);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .contact-item:hover {
            color: var(--accent);
        }
        
        .contact-icon {
            margin-right: 0.5rem;
            font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .profile-section {
                flex-direction: column;
                text-align: center;
            }
            
            .skills-container {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .contact-info {
                flex-direction: column;
            }
            
            .contact-item {
                margin: 0.5rem 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>Sujan Guragain</h1>
            <div class="title-bar">System Administrator | DevOps Engineer | Cybersecurity Enthusiast</div>
        </div>
    </header>
    
    <div class="container">
        <section class="card">
            <div class="profile-section">
                <img src="https://via.placeholder.com/300" alt="Sujan Guragain" class="profile-img">
                <div>
                    <h2 class="section-title">About Me</h2>
                    <p>
                        Passionate tech professional with expertise in system administration, DevOps
                        practices, and cybersecurity. Committed to implementing robust, scalable, and secure
                        infrastructure solutions that drive organizational efficiency.
                    </p>
                    <p style="margin-top: 1rem;">
                        Want to work in an organization where a culture of freedom and working for initiatives is
                        ensured, facilitating my contribution through thoughts and actions to the company's
                        vision and thus achieve self-development by playing a significant role in building the
                        organization.
                    </p>
                    <div style="margin-top: 1.5rem;">
                        <a href="mailto:guragain.sujan11@gmail.com" class="contact-item">
                            <i class="contact-icon">✉️</i> guragain.sujan11@gmail.com
                        </a>
                        <a href="tel:+9779842761231" class="contact-item">
                            <i class="contact-icon">📱</i> +977-9842761231
                        </a>
                        <a href="#" class="contact-item">
                            <i class="contact-icon">📍</i> Kathmandu, Nepal
                        </a>
                    </div>
                    <a href="#contact" class="btn">Get In Touch</a>
                </div>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-container">
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" class="skill-icon">
                    <div class="skill-name">Linux</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" class="skill-icon">
                    <div class="skill-name">Docker</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" class="skill-icon">
                    <div class="skill-name">Kubernetes</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="Ansible" class="skill-icon">
                    <div class="skill-name">Ansible</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" class="skill-icon">
                    <div class="skill-name">Terraform</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" class="skill-icon">
                    <div class="skill-name">AWS</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="skill-icon">
                    <div class="skill-name">MySQL</div>
                </div>
                <div class="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" class="skill-icon">
                    <div class="skill-name">Jenkins</div>
                </div>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Work Experience</h2>
            
            <div class="experience-item">
                <div class="experience-title">SysAdmin and DevOps Engineer</div>
                <div class="experience-company">Chez Inspheris (Lively Software)</div>
                <div class="experience-date">June 2022 - Present</div>
                <div class="experience-description">
                    <ul>
                        <li>Developed and deployed an Intranet solution for clients, improving organizational communication.</li>
                        <li>Established and maintained CICD pipelines using Jenkins.</li>
                        <li>Managed Proxmox VMs and Hosts, ensuring a stable server infrastructure.</li>
                        <li>Set up HTTPD Reverse Proxy to manage web traffic efficiently with added security using ModSecurity.</li>
                        <li>Conducted stress testing with JMeter and implemented Nessus Pen Testing for vulnerability assessment.</li>
                        <li>Utilized OWASP ZAP Tools for web application security testing.</li>
                        <li>Configured AWS SES for efficient email communication and Route 53 for DNS management.</li>
                        <li>Set up and monitor services using Nagios Core, Zabbix and visualization of different services in Grafana using Prometheus.</li>
                        <li>Managed SSL certificates from Digicert and LetsEncrypt.</li>
                        <li>Configured Elasticsearch clustering and indexing, alongside MySQL database management.</li>
                        <li>Worked in a Single Sign-On (SSO) environment, integrating with Okta, Azure, Google OAuth, and LemonLDAP for user synchronization.</li>
                    </ul>
                </div>
            </div>
            
            <div class="experience-item">
                <div class="experience-title">System Administrator</div>
                <div class="experience-company">Genese Solution Pvt. Ltd.</div>
                <div class="experience-date">July 2021 - June 2022</div>
                <div class="experience-description">
                    <ul>
                        <li>Provided AWS Cloud Support to multi-diverse customers around the world.</li>
                        <li>Implemented CICD using AWS Code Commit, Code Deploy.</li>
                        <li>Installed and configured WHM server for clients and managed DNS records and monitoring.</li>
                        <li>Set up Google Workspace Email, Email Migration, Drive Backups.</li>
                        <li>Demonstrated strong understanding of the entire AWS Product and Service suite primarily EC2, S3, RDS, VPC, Lambda.</li>
                        <li>Monitored deployments using AWS Cloudwatch and Nagios.</li>
                        <li>Managed LastPass, Jira Software, and Security Best Practices in Cloud and Physical Devices.</li>
                        <li>Applied knowledge of TrendMicro for the Security on Laptops and Computers.</li>
                        <li>Conducted NAS Monitoring for Surveillance Station.</li>
                        <li>Worked as Mentor for Sysadmin Interns.</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Education</h2>
            
            <div class="education-item">
                <div class="education-degree">Master in Information Technology and Cybersecurity</div>
                <div class="education-institution">London Metropolitan University</div>
                <div class="education-year">Currently Pursuing</div>
            </div>
            
            <div class="education-item">
                <div class="education-degree">Bachelor in Computer Science and Information Technology</div>
                <div class="education-institution">Tribhuvan University</div>
                <div class="education-year">2020</div>
            </div>
            
            <div class="education-item">
                <div class="education-degree">+2 Science</div>
                <div class="education-institution">Higher Secondary Education Board</div>
                <div class="education-year">2016</div>
            </div>
            
            <div class="education-item">
                <div class="education-degree">SLC</div>
                <div class="education-institution">Nepal Government</div>
                <div class="education-year">2014</div>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Certifications</h2>
            
            <div class="certifications-container">
                <div class="certification-badge">CheckPoint Firewall System Administrator (CCSA) - 2025</div>
                <div class="certification-badge">MySQL Database Administrator - 2025</div>
                <div class="certification-badge">AWS Solutions Architect Associate - 2022</div>
                <div class="certification-badge">AWS SysOps Administrator - 2021</div>
                <div class="certification-badge">RHCSA and RHCSE - 2020</div>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Work Projects</h2>
            
            <div class="project-item">
                <div class="project-title">Architecting highly available and resilient Ecommerce Web Application in Cloud</div>
                <ul>
                    <li>Designed AWS highly available and fault-tolerant architecture.</li>
                    <li>Implemented cloud monitoring with CloudWatch.</li>
                    <li>Managed CloudTrail logs for management events as well as data events.</li>
                </ul>
            </div>
            
            <div class="project-item">
                <div class="project-title">Nagios Xi Setup for Client</div>
                <ul>
                    <li>Installed Nagios Xi in Ubuntu VM.</li>
                    <li>Integrated various monitoring tools in Nagios Xi.</li>
                </ul>
            </div>
            
            <div class="project-item">
                <div class="project-title">Setup of Intranet for Client</div>
                <ul>
                    <li>Installed Java, Tomcat, MySQL and Elasticsearch.</li>
                    <li>Upgraded Database version of MySQL.</li>
                    <li>Optimized the ES, MySQL Performance.</li>
                    <li>Implemented backup and restore procedures.</li>
                    <li>Updated policies and maintained the firewalls.</li>
                    <li>Established regular monitoring and alerting through Nagios.</li>
                </ul>
            </div>
        </section>
        
        <section class="card">
            <h2 class="section-title">Personal Qualities</h2>
            
            <div class="personal-qualities">
                <div class="quality-item">Strong analytical and people management skills</div>
                <div class="quality-item">Excellent verbal and personal communication skills</div>
                <div class="quality-item">Accuracy and attention to detail</div>
                <div class="quality-item">Passion for constant improvement</div>
                <div class="quality-item">Ability to make sound decisions</div>
                <div class="quality-item">Excellent organization and prioritization skills</div>
            </div>
        </section>
        
        <section class="card" id="contact">
            <h2 class="section-title">Get In Touch</h2>
            <p>I'm always open to discussing new projects, opportunities, or partnerships.</p>
            <form action="#" method="POST" style="margin-top: 1.5rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <input type="text" placeholder="Name" style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    <input type="email" placeholder="Email" style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <input type="text" placeholder="Subject" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;">
                <textarea placeholder="Message" rows="5" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;"></textarea>
                <button type="submit" class="btn" style="border: none; cursor: pointer; width: 100%;">Send Message</button>
            </form>
        </section>
    </div>
    
    <footer>
        <p>© 2025 Sujan Guragain. All Rights Reserved.</p>
        <div class="social-links">
            <a href="https://github.com/sujanguragain/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="social-icon"></a>
            <a href="https://www.linkedin.com/in/sujanguragain/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" class="social-icon"></a>
            <a href="https://x.com/IMVRG" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" class="social-icon"></a>
        </div>
    </footer>
</body>
</html>
