import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

// Full Stack Web Development
const labelsFirst = [
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "Postman",
];

// DevOps & Automation
const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Terraform",
  "NGINX",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

// Cloud-Native Development
const labelsThird = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Prometheus",
  "Grafana",
  "NGINX",
  "ArgoCD",
  "Helm",
  "Cloudflare",
  "ECS",
  "EKS",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I build modern, scalable web applications end-to-end using
              technologies like <strong>React</strong>, <strong>Next.js</strong>
              , <strong>NestJS</strong>, and <strong>GraphQL</strong>. I’m
              experienced across the full SDLC, with a focus on writing clean,
              maintainable code for both frontend and backend. I also care
              deeply about user experience—crafting responsive, accessible UIs
              with <strong>Tailwind CSS</strong>, <strong>SCSS</strong>, and
              thoughtful design principles to ensure great usability across
              devices.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients implement robust
              DevOps workflows, including automated testing, CI/CD pipelines,
              and cloud-based deployment strategies to ensure a smooth and
              reliable Go-Live. I work with tools like{" "}
              <strong>GitHub Actions</strong>, <strong>Docker</strong>,{" "}
              <strong>Terraform</strong>, and <strong>NGINX</strong> to
              streamline development and deployment. Whether deploying to{" "}
              <strong>AWS</strong>, <strong>Vercel</strong>, or{" "}
              <strong>DigitalOcean</strong>, I focus on automation, monitoring,
              and repeatability to support scalable production environments.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud-Native Development</h3>
            <p>
              Build applications that are scalable, resilient, and optimized for
              the cloud. As a <strong>certified AWS Cloud Practitioner</strong>,
              I bring a solid understanding of cloud architecture and best
              practices for designing modern, distributed systems. I have
              hands-on experience deploying microservices using{" "}
              <strong>AWS</strong>, <strong>Docker</strong>, and{" "}
              <strong>Kubernetes</strong>, along with infrastructure automation
              via <strong>Terraform</strong> and system monitoring using{" "}
              <strong>Prometheus</strong> and <strong>Grafana</strong>.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
