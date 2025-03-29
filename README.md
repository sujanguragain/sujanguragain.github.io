
<!DOCTYPE html>
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
        }
        .social-icon:hover {
            transform: scale(1.2);
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
            </div>
        </section>
        <section class="card">
            <h2 class="section-title">Professional Expertise</h2>
            <div class="expertise-item">
                <h3>Infrastructure Automation</h3>
                <p>Specializing in automating infrastructure deployment and configuration using industry-standard tools including Terraform, Ansible, and CloudFormation. Experience in building CI/CD pipelines for infrastructure as code.</p>
            </div>
            <div class="expertise-item">
                <h3>Cloud Architecture</h3>
                <p>Designing and implementing secure, scalable cloud solutions on AWS, Azure, and GCP. Proficient in containerization technologies and orchestration using Docker and Kubernetes.</p>
            </div>
            <div class="expertise-item">
                <h3>Security Operations</h3>
                <p>Implementing security best practices in infrastructure design, vulnerability assessment, and compliance. Experience with security tooling, monitoring, and incident response procedures.</p>
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
            <a href="#" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="social-icon"></a>
            <a href="#" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" class="social-icon"></a>
            <a href="#" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" class="social-icon"></a>
        </div>
    </footer>
</body>
</html>
