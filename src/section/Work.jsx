import { useState } from 'react';
import Button from '../components/Button.jsx';

const Work = () => {
  const [projects] = useState([
    {
      title: '3D Portfolio Website',
      description: 'Built a dynamic 3D portfolio using React, Three.js, and Tailwind CSS.',
      image: 'assets/project1.png',
      link: 'https://github.com/ruchibhilare/3d-portfolio'
    },
    {
      title: 'Tech Tips Website',
      description: 'Developed a responsive website to share tech tips and insights using Next.js and Tailwind CSS.',
      image: 'assets/project2.png',
      link: 'https://techtips.example.com'
    },
    {
      title: 'Social Media App',
      description: 'Created a social app with React and Material UI for seamless user interactions.',
      image: 'assets/project3.png',
      link: 'https://github.com/its-ruchi/social_app'
    }
  ]);

  return (
    <section className="c-space my-6 md:my-4" id="work"> {/* Reduced from my-10 to my-6 */}
      <h2 className="hero_tag text-gray_gradient mb-4"> {/* Added bottom margin to section header */}
        My Projects
      </h2>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {projects.map((project, index) => (
          <div key={index} className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img
                src={project.image}
                alt={project.title}
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">{project.title}</p>
                <p className="grid-subtext">{project.description}</p>
                <Button
                  name="View Project"
                  isBeam
                  containerClass="w-full mt-4"
                  onClick={() => window.open(project.link, '_blank')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;