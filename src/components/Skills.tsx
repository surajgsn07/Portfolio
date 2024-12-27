import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Server, Database, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />, 
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'HTML5',
        'CSS3',
        'TailwindCSS',
        'Redux',
        'React Hook Form',
        'React Router',
      ],
    },
    {
      category: 'Data Structures & Algorithms',
      icon: <Code className="w-6 h-6" />, 
      items: [
        'Problem Solving',
        'Algorithm Optimization',
        'Time Complexity Analysis',
        'Space Complexity Optimization',
      ],
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-6 h-6" />, 
      items: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Nodemon'],
    },
    {
      category: 'DevOps & Tools',
      icon: <Wrench className="w-6 h-6" />, 
      items: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Postman', 'Vite'],
    },
    {
      category: 'Deployment Platforms',
      icon: <Code className="w-6 h-6" />, 
      items: ['Netlify', 'Vercel', 'Render'],
    },
    {
      category: 'Database & APIs',
      icon: <Database className="w-6 h-6" />, 
      items: ['MongoDB', 'RESTful APIs', 'Socket.io'],
    },
    {
      category: 'Design Tools',
      icon: <Palette className="w-6 h-6" />, 
      items: ['Figma', 'Responsive Design', 'UI/UX Principles'],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and development capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSkills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm hover:bg-purple-500/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
