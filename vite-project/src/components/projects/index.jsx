import React from 'react';
// import 6 imgs of projects from src/assets
import workday from '../../assets/workday.png';
import readme from '../../assets/readme.png';
import employeeTracker from '../../assets/employeeTracker.png';
import ecommerce from '../../assets/ecommerce.png';
import horiseon from '../../assets/horiseon.png';
import textEditor from '../../assets/textEditor.png';


const projects = () => {
    const projects = [
        {
            id: 1,
            src: workday, 
            repo: 'https://github.com/eissamonet/Work-Day-SchedulerLinks'
        },
        {
            id: 2,
            src: readme, 
            repo: 'https://github.com/eissamonet/README-Generator'
        },
        {
            id: 3,
            src: employeeTracker,
            repo: 'https://github.com/eissamonet/EmployeeTrackerLinks' 


        },
        {
            id: 4,
            src: ecommerce,
            repo:  'https://github.com/eissamonet/E-Commerce'
        },
        {
            id: 5,
            src: horiseon,
            repo: 'https://eissamonet.github.io/Horiseon/'
        },
        {
            id: 6,
            src: textEditor,
            repo: 'https://github.com/eissamonet/TextEditor'
        },
    ];

    return (
        <div className="container">
            <h1>Projects</h1>
                {projects.map(({ id, src, repo }) => (
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img src={src} className="card-img-top" alt="project" />
                                <div className="card-body">
                                    <a href={repo} className="btn btn-primary">Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default projects;
                    

   



    

