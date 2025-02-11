import React from 'react';
import '../styles/ProjectCard.css'; // Import your CSS file

function ProjectCard({ text, images, imageGap = '10px' }) {
    return (
        <div className="image-text-grid">
            <div className="text-box">
                {text} {/* Render the text content */}
            </div>
            <div className="image-grid" style={{ gridGap: imageGap }}> {/* Apply gap to the grid */}
                {images && images.length > 0 ? ( // Check if images exist and are not empty
                    images.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>No images available for this project.</p> // Message if no images
                )}
            </div>
        </div>
    );
}

export default ProjectCard;