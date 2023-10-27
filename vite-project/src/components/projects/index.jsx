import React from 'react';
// import 6 imgs of projects from src/assets
import workday from '../../assets/workday.png';
import readme from '../../assets/readme.png';
import employeeTracker from '../../assets/employeeTracker.png';
import ecommerce from '../../assets/ecommerce.png';
import horiseon from '../../assets/horiseon.png';
import textEditor from '../../assets/textEditor.png';


const Projects = () => {
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
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Projects
              </p>
              <p className="py-6">My latest work!</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, repo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="projects"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                      GitHub
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default Projects;
                    

   



    

