import ornale from '../assets/images/ornale.png';
import twsg from '../assets/images/twsg.png';
import objdetect from '../assets/images/objdetect.png';
import anatomyai from '../assets/images/chainlit.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://ornale.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={ornale} className="zoom" alt="Ornale thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/axjh03/ornale" target="_blank" rel="noreferrer">
                        <h2>💬 Ornale: Messaging App</h2>
                    </a>
                    <p>
                        Built a full-featured messaging app with React and Firebase (Auth + Firestore) enabling real-time chats, user auth, and clean UI. Includes robust state management and error handling.
                    </p>
                </div>

                <div className="project">
                    <a href="http://sp24.cse3310.org:9018/" target="_blank" rel="noreferrer">
                        <img src={twsg} className="zoom" alt="TWSG thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/axjh03/twsg" target="_blank" rel="noreferrer">
                        <h2>🎮 TWSG: The Word Search Game</h2>
                    </a>
                    <p>
                        Multiplayer word search game using Java, WebSockets, and JavaScript. Features real-time communication, score tracking, chat, and dynamic UI with game rooms and grid generation.
                    </p>
                </div>

                <div className="project">
                    <a href="https://objdetect-aalok.web.app/" target="_blank" rel="noreferrer">
                        <img src={objdetect} className="zoom" alt="Object Detect thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/axjh03/object-detect" target="_blank" rel="noreferrer">
                        <h2>🕵️ Object Detect</h2>
                    </a>
                    <p>
                        Real-time object detection app using TensorFlow.js, OpenCV.js, and React. Supports live camera input, image uploads, and multiple pre-trained model options for bounding box detection.
                    </p>
                </div>

                <div className="project">
                    <a href="https://huggingface.co/spaces/axjh03/anatomy/tree/main" target="_blank" rel="noreferrer">
                        <img src={anatomyai} className="zoom" alt="Anatomy AI thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/axjh03/anatomy-ai" target="_blank" rel="noreferrer">
                        <h2>🤖 Anatomy AI: Document Query System</h2>
                    </a>
                    <p>
                        Built an intelligent document query system using Python, Chainlit, FAISS, and Hugging Face embeddings. Enables natural language search across PDFs, with 95% retrieval accuracy and fast response times.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
