import React from "react";
import "./App.css"; // Import the CSS file
import kyouth from "./assets/kyouth.png";
import unimas from "./assets/unimas.jpg";
import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import jsIcon from "./assets/js.png";
import vueIcon from "./assets/vue.png";
import reactIcon from "./assets/react.png";
import flutterIcon from "./assets/flutter.png";
import about from "./assets/about.png";
import education from "./assets/education.png";
import skill from "./assets/skill.png";
import exp from "./assets/experience.png";
import project from "./assets/project.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email.png";
import avatar from "./assets/avatar.png";

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "Html", icon: htmlIcon, className: "skill-html" },
    { name: "CSS", icon: cssIcon, className: "skill-css" },
    { name: "JavaScript", icon: jsIcon, className: "skill-js" },
    { name: "Vue", icon: vueIcon, className: "skill-vue" },
    { name: "React", icon: reactIcon, className: "skill-react" },
    { name: "Flutter", icon: flutterIcon, className: "skill-flutter" },
  ];

  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Categories */}
        <div className="categories">
          <h2>Categories</h2>
          <nav className="nav-list">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-button"
            >
              <div className="sidebar-icon">
                <img src={about} alt="K-youth Logo" />
              </div>
              <span className="nav-text">About</span>
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="nav-button"
            >
              <div className="sidebar-icon">
                <img src={education} alt="K-youth Logo" />
              </div>
              <span className="nav-text">Educations</span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="nav-button"
            >
              <div className="sidebar-icon">
                <img src={skill} alt="K-youth Logo" />
              </div>
              <span className="nav-text">Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("jobs")}
              className="nav-button"
            >
              <div className="sidebar-icon">
                <img src={exp} alt="K-youth Logo" />
              </div>
              <span className="nav-text">Experiences</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-button"
            >
              <div className="sidebar-icon">
                <img src={project} alt="K-youth Logo" />
              </div>
              <span className="nav-text">Projects</span>
            </button>
          </nav>
        </div>

        {/* Social Links */}
        <div>
          <h2>Social Link</h2>
          <nav className="nav-list">
            <a
              href="https://www.linkedin.com/in/sitiaishah-hussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className="social-icon">
                <img src={linkedin} alt="LinkedIn Logo" />
              </div>
              <span className="social-text">LinkedIn</span>
            </a>
            <a
              href="https://github.com/saishahh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className="social-icon">
                <img src={github} alt="Github Logo" />
              </div>
              <span className="social-text">GitHub</span>
            </a>

            <a
              href="mailto:Siti Aishah <saishah1908@email.com>"
              className="social-link"
            >
              <div className="social-icon">
                <img src={email} alt="Email Logo" />
              </div>
              <span className="social-text">Email</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Card */}
        <div></div>
        <div id="about" className="profile-card">
          <div className="profile-content">
            <div className="profile-text">
              <h1 className="profile-title">Siti Aishah Binti Hussain</h1>
              <p className="profile-description">
                A recent graduate from Universiti Malaysia Sarawak (UNIMAS) with
                a bachelor’s degree in Cognitive Science (Hons) and a strong
                interest in software development. Enjoy designing and building
                user-focused applications that solve real-world problems, with
                attention to functionality, efficiency, and clean code. Eager to
                continuously learn and grow in this field, I’m actively seeking
                an opportunity to kickstart my career in software development
                and contribute meaningfully to a forward-thinking development
                team.
              </p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="download-btn">Download Resume</button>
              </a>
            </div>
            <div className="profile-avatar">
              <div className="avatar-outer">
                <div className="avatar-inner">
                  <img src={avatar} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="educations-section">
          <h2 className="section-title"> Educations </h2>
          <div className="education-card">
            <div className="education-header">
              <div className="education-info">
                <div className="education-logo">
                  <img src={kyouth} alt="K-youth Logo" />
                </div>
                <div>
                  <h3 className="education-title">
                    {" "}
                    Khazanah Youth Development Programme, Excelerate{" "}
                  </h3>
                  <p className="education-date"> June 2025 - Present </p>
                </div>
              </div>
            </div>
            <p className="education-description">
              Certified Ethical Hacker (CEH)
            </p>

            <div className="education-header">
              <div className="education-info">
                <div className="education-logo">
                  <img src={unimas} alt="UNIMAS Logo" />
                </div>
                <div>
                  <h3 className="education-title">
                    {" "}
                    Universiti Malaysia Sarawak (UNIMAS){" "}
                  </h3>
                  <p className="education-date">
                    {" "}
                    October 2021 - November 2024{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="education-description">
              Bachelor in Cognitive Science with Honours
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className={`skill-card ${skill.className}`} key={index}>
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Jobs Section */}
        <div id="jobs" className="jobs-section">
          <h2 className="section-title">Experiences</h2>
          <div className="job-card">
            <div className="job-header">
              <div className="job-info">
                <div className="job-logo">
                  <span>📊</span>
                </div>
                <div>
                  <h3 className="job-title">Asia Bookkeeping Pte. Ltd.</h3>
                  <p className="job-date">July 2023 - October 2023</p>
                </div>
              </div>
            </div>
            <p className="job-description">
              Internship in DL Digital Media Pte. Ltd (Web Designer)
            </p>
            <ul className="job-achievements">
              <li>
                <span className="job-bullet">•</span>
                Worked on front-end development using HTML, CSS, JavaScript, and
                Nuxt.js to build user-friendly interfaces with smooth
                navigation.
              </li>
              <li>
                <span className="job-bullet">•</span>
                Gathered requirements from clients and turned them into
                functional website features.
              </li>
              <li>
                <span className="job-bullet">•</span>
                Tested and fixed bugs to ensure good performance and
                compatibility.
              </li>
            </ul>
          </div>
        </div>

        {/* My Projects */}
        <div id="projects" className="projects-section">
          <h2 className="section-title"> Projects</h2>
          <div className="layout-section">
            <div class="projects-card ">
              <div class="projects-item">
                <div class="container-title">QR Code-Based Conference App</div>
                <div class="container-content">
                  Developed a mobile app to handle conference registration,
                  attendee check-in, and notifications for a faculty event.
                  Included secure admin login, automatic user creation from
                  Excel payment records, QR code check-in with real-time
                  attendance updates in Firebase, and push notifications for
                  event updates. Maintained a structured database and ensured
                  smooth, real-time sync for a better user experience.
                </div>
                <div class="project-tag">Flutter</div>
                <div class="project-tag">Android Studio</div>
                <div class="project-tag">Firebase</div>
                <div class="project-tag">Group Project</div>
                <div class="project-meta">
                  <span class="project-status">Completed</span>
                  
                  <span class="project-date">May 2024 - June 2024</span>
                </div>
              </div>
              <div class="projects-item">
                <div class="container-title">
                  Family Business Management App
                </div>
                <div class="container-content">
                  Designed and developed a mobile app for a family business with
                  admin and user features, including an admin dashboard to
                  manage products, upload and delete items with images and
                  details, and user login with profile management. The app also
                  supported product browsing, search, filtering, cart, order
                  placement, and sent notifications for order status updates.
                </div>
                <div class="project-tag">Flutter</div>
                <div class="project-tag">Android Studio</div>
                <div class="project-tag">Group Project</div>

                <div class="project-meta">
                  <span class="project-status">Completed</span>
                  <span class="project-date">May 2024 - June 2024</span>
                </div>
              </div>
              <div class="projects-item">
                <div class="container-title">
                  Wedding Organizer Management System
                </div>
                <div class="container-content">
                  Developed a wedding organizer website showcasing
                  organizational information, services, “About Us,” and “Contact
                  Us” sections. Includes a booking form and allows admins to
                  manage data through full CRUD operations. Built with Bootstrap
                  for a responsive, user-friendly interface and Laravel for secure,
                  database-driven operations.
                </div>
                <div class="project-tag">Laravel</div>
                <div class="project-tag">Bootstrap</div>
                <div class="project-tag">Group Project</div>

                <div class="project-meta">
                  <span class="project-status">Completed</span>
                  <span class="project-date">Dec 2023 - Jan 2024</span>
                </div>
              </div>
              <div class="projects-item">
                <div class="container-title">
                  Final Year Project: Design and Development of a Web-based
                  Internship Management System for An Undergraduate Programme at
                  UNIMAS
                </div>
                <div class="container-content">
                  Design and develop a web-based system to help Cognitive
                  Science students at UNIMAS share and learn about internship
                  experiences. This system will let 3rd-year students share
                  their internship stories to guide 2nd-year students, making it
                  easier for them to explore different career paths and prepare
                  for internships. The study involves finding out what users
                  need, building a prototype, and testing how easy it is to use.
                </div>
                <div class="project-tag">Laravel</div>
                <div class="project-tag">Bootstrap</div>
                

                <div class="project-meta">
                  <span class="project-status">Completed</span>
                  <span class="project-date">Oct 2023 - Oct 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
