import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard'; // Import the ProjectCard component
import './styles/global.css';

import databricksImage from './images/databricks.png';

function App() {
    const projects = [
        {
            title: "SKILLSET",
            description: "D",
            link: "https://github.com/yourusername/project1",
            images: [
                databricksImage,
                databricksImage,
                databricksImage,
                databricksImage,
                databricksImage,
                databricksImage,
                databricksImage
            ]
        }
        // ... more projects
    ];

    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index}
                        text={( // Create text content as JSX
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link}>View Project</a>
                            </div>
                        )}
                        images={project.images}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;