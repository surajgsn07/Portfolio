import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: 'React Video Annotation Tool',
      description:
        'It is a flexible and intuitive library to add annotations on videos in real-time. It supports a wide range of features including shape tools, annotation lists, undo/redo functionality, and more.',
      image: 'video-annotation.png',
      technologies: ['React', 'Javascript', 'React-konva'],
      github: 'https://github.com/iamaniketgupta/react-video-annotation',
      live: 'https://www.npmjs.com/package/react-video-annotation-tool',
    },
    {
      title: 'Lets Connect',
      description:
        'Lets Connect is a platform designed for tech enthusiasts to network, share posts, connect through video calls, and build profiles by adding education, experience, and more.',
      image: 'letsconnect.png',
      technologies: ['Node.js', 'Express', 'MongoDB' , 'ReactJs', 'TailwindCSS' ,'Cloudinary' ,'Socket.io' , 'Web-RTC'],
      github: 'https://github.com/surajgsn07/LetsConnect',
      live: 'https://letsconnect-ui.netlify.app/',
    },
    {
      title: 'PCTE-Library',
      description:
        'PCTE-Library is a library management system that allows users to manage books, authors, and categories. It also includes features like user authentication, book search, and reminder notifications for overdue books.',
      image: 'pcte-library.png',
      technologies: ['Node.js', 'Express', 'MongoDB' , 'ReactJs', 'TailwindCSS' ,'Cloudinary' ,'nodemailer' , 'node-cron'],
      github: 'https://github.com/surajgsn07/library-management',
      live: 'https://pcte-library.netlify.app/',
    },
    {
      title: 'Hack-Meets',
      description:
        'Hack-meets is a platform for techies to find their partners for hacakthons and their group projects and also to get involved in hackathons. It does have features like group projects and hackathons management and Chats.',
      image: 'hack-meets.png',
      technologies: ['Node.js', 'Express', 'MongoDB' , 'ReactJs', 'TailwindCSS' ,'Cloudinary' ,'Socket.io','Google OAuth' ],
      github: 'https://github.com/surajgsn07/hack-meets.git',
      live: 'https://hack-meets.vercel.app/',
    },
    {
      title: 'Watch-it',
      description: 'A video-streaming platform that allows users to watch videos , upload their own and add comments and like and many more.',
      image: 'watchit.png',
      technologies: ['React', 'Node.js', 'TailwindCSS' , 'MongoDB' , 'Cloudinary'],
      github: 'https://github.com/surajgsn07/My-tube-Frontend',
      live: 'https://watch-it-surajgsn.netlify.app/',
    },
    {
      title: 'Pcte-PPT Maker',
      description: 'A platform to help Pcte students to create their  PPTs and helpt them to reduce their workload.',
      image: 'ppt-maker.png',
      technologies: ['React', 'TailwindCSS' , 'Groq Api','Unsplash API' , 'Pexel Api'],
      github: 'https://github.com/surajgsn07/PCTE-PPT-Maker',
      live: 'https://pcte-ppt-maker.netlify.app/',
    }
    ,
    {
      title: 'Pcte-Synopsis Maker',
      description: 'A platform to help Pcte students to create their  synopsis.',
      image: 'synopsis-maker.png',
      technologies: ['React', 'TailwindCSS' , 'Groq Api'],
      github: 'https://github.com/surajgsn07/My-tube-Frontend',
      live: 'https://pcte-synopsis-maker.netlify.app/',
    }
    ,
    {
      title: 'Sports-Connect',
      description: 'A platform to bring sports enthusiasts together and share their passion and event details.',
      image: 'sports.png',
      technologies: ['React', 'TailwindCSS' , 'MongoDB' , 'Cloudinary' ,'Leaflet' ],
      github: 'https://github.com/Iamaniketgupta/CodeHawks-Hackathon-1',
      live: 'https://code-hawks.vercel.app/',
    }
    // Add more projects as needed
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live 
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-500 transition-all duration-300 rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-purple-500/50"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;
