import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython , faNodeJs} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Angular",
    "Solid",
    "Redux",
    "Material-UI",
    "Bootstrap",
    "Vue.js",
    "Tailwind CSS",
    "Jest",
];

const labelsSecond = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "GitHub",
  "AWS",
  "Git",
  "Postman",
  "PostgreSQL",
];


const labelsThird = [
    "OpenAI",
    "Builder.IO",
    "Copilot",
    "",
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Front end development </h3>
              <p>
                I have built a diverse array of web applications from scratch
                using modern technologies such as React,Solid, and Angular. I
                have a strong proficiency in the SDLC process and frontend development.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} size="3x" />
              <h3>Backend Development</h3>
              <p> 
                Worked in developing robust web applications from the ground
                up using modern backend technologiesin backend development, 
                where I focus on creating scalable and efficient server-side solutions.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x" />
              <h3>GenAI</h3>
              <p>
                Stay relevant in the market by leveraging the latest AI models
                in your projects. I have professional experience building
                enterprise grade GenAI-enabled solutions to empower intelligent
                decision making.
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