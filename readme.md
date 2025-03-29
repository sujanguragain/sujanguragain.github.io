<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sujan Guragain - DevOps & Cybersecurity Expert</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #1e3a8a;
            --secondary: #0284c7;
            --accent: #0ea5e9;
            --light: #f8fafc;
            --dark: #0f172a;
            --text: #334155;
            --gradient: linear-gradient(135deg, #1e3a8a, #0284c7);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--text);
            line-height: 1.6;
        }

        /* Navigation Bar */
        nav {
            background: var(--dark);
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--accent);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://via.placeholder.com/1500x500') center/cover;
            opacity: 0.2;
            z-index: 0;
        }

        .hero-content {
            z-index: 1;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }

        .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background-color: var(--accent);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s;
        }

        .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        /* Card */
        .card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin-bottom: 3rem;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-10px);
        }

        .section-title {
            color: var(--primary);
            font-size: 2rem;
            margin-bottom: 2rem;
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background-color: var(--accent);
            margin-top: 0.5rem;
        }

        /* Profile Section */
        .profile-section {
            display: flex;
            align-items: center;
            gap: 3rem;
            margin-bottom: 2rem;
        }

        .profile-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid var(--accent);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Skills */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .skill-item {
            text-align: center;
            transition: transform 0.3s;
        }

        .skill-item:hover {
            transform: scale(1.15);
        }

        .skill-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 0.5rem;
        }

        .skill-name {
            font-weight: 500;
        }

        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            text-align: center;
            padding: 3rem 1rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            transition: transform 0.3s;
        }

        .social-icon:hover {
            transform: scale(1.3);
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.2rem;
            }

            .profile-section {
                flex-direction: column;
                text-align: center;
            }

            .nav-links {
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="nav-logo">Sujan Guragain</div>
        <div class="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Sujan Guragain</h1>
            <p>System Administrator | DevOps Engineer | Cybersecurity Enthusiast</p>
            <a href="#contact" class="btn">Get In Touch</a>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container">
        <!-- About Section -->
        <section class="card" id="about">
            <div class="profile-section">
                <!-- Replace the src with the actual profile picture URL after downloading from Facebook -->
                <img src="https://via.placeholder.com/300" alt="Sujan Guragain" class="profile-img">
                <div>
                    <h2 class="section-title">About Me</h2>
                    <p>
                        I'm a passionate tech professional specializing in system administration, DevOps practices, and cybersecurity. I focus on building robust, scalable, and secure infrastructure solutions to drive organizational efficiency.
                    </p>
                    <p style="margin-top: 1rem;">
                        My goal is to contribute to an organization that values freedom and innovation, where I can play a significant role in achieving the company’s vision while growing professionally.
                    </p>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="card" id="skills">
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

        <!-- Contact Section -->
        <section class="card" id="contact">
            <h2 class="section-title">Get In Touch</h2>
            <p>I'm always open to discussing new projects, opportunities, or partnerships.</p>
            <form action="#" method="POST" style="margin-top: 2rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <input type="text" placeholder="Name" style="padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
                    <input type="email" placeholder="Email" style="padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
                </div>
                <input type="text" placeholder="Subject" style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 1.5rem;">
                <textarea placeholder="Message" rows="5" style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 1.5rem;"></textarea>
                <button type="submit" class="btn" style="border: none; cursor: pointer; width: 100%;">Send Message</button>
            </form>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <p>© 2025 Sujan Guragain. All Rights Reserved.</p>
        <div class="social-links">
            <a href="https://github.com/sujanguragain/" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="social-icon">
            </a>
            <a href="https://www.linkedin.com/in/sujanguragain/" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" class="social-icon">
            </a>
            <a href="https://x.com/IMVRG" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" class="social-icon">
            </a>
        </div>
    </footer>
</body>
</html>
