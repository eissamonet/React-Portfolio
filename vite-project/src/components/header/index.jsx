import React, { useState } from 'react';
import Navigation from "../navigation";
import About from "../about";
import Projects from "../projects";
import Contact from "../contact";
import Resume from "../resume";

function Portfolio() {
    // set the state of the current page
    const [currentPage, handlePageChange] = useState('about');

    const renderPage = () => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
        switch (currentPage) {
            case 'projects':
                return <Projects></Projects>
            case 'contact':
                return <Contact></Contact>
            case 'resume':
                return <Resume></Resume>
            default:
                return <About></About>
        }
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    // Render the component returned by 'renderPage()'
                    renderPage()
                }
            </div>
        </div>
    );
}

export default Portfolio;


