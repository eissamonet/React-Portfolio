import React from 'react';
// import projects from src
import projects from '../../projects.json';

function projects() {
    return (
        <section>
            <h1>Projects</h1>
            <div className='flex-row'>
                {projects.map((project) => (
                    <div className='project-card'>
                        <a href={project.link} target='_blank' rel='noreferrer'>
                            <img
                                src={require(`../../assets/images/${project.image}`).default}
                                alt={project.name}
                                className='project-img'
                            />
                            <div className='project-text'>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}