import burger from '../assets/images/burgermaker_bg.avif';
import netflix from '../assets/images/netflix.jpg';
import twitch from '../assets/images/twitch.jpeg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://react-my-burger-e9ac6.web.app/" target="_blank" rel="noreferrer"><img src={burger} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://react-my-burger-e9ac6.web.app/" target="_blank" rel="noreferrer"><h2>Burger Builder</h2></a>
                <p>Developed burger builder allowing users to dynamically build their own custom burgers by selecting ingredients, adjusting quantities, and viewing the updated price in real-time. It features an intuitive UI, state management with React hooks, and efficient rendering of components for a seamless user experience using React, Redux and JavaScript"</p>
            </div>
            <div className="project">
                <a href="https://github.com/besalraj30/netflix-gpt" target="_blank" rel="noreferrer"><img src={netflix} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/besalraj30/netflix-gpt" target="_blank" rel="noreferrer"><h2>Netflix GPT</h2></a>
                <p>Developed Netflix GPT, a clone of Netflix using React, Redux, and JavaScript, with integrated OpenAI-powered search for intelligent movie suggestions allowing users to browse, filter, and view movie details like the original Netflix interface, while leveraging AI to provide personalized recommendations based on user input.</p>
            </div>
            <div className="project">
                <a href="https://github.com/besalraj30/next14-twitch-clone" target="_blank" rel="noreferrer"><img src={twitch} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/besalraj30/next14-twitch-clone" target="_blank" rel="noreferrer"><h2>Game Hub</h2></a>
                <p>Developed a Twitch clone using Next.js, PrismaDB, JavaScript, and Clerk for authentication allowing users to stream and watch live content, with features like user account management, real-time chat, and video playback, closely mirroring the functionality of the original platform.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;