import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const MyExperience = () => {
  const experiences = [
    {
      title:'Full Stack Developer Intern',
      company:'Smart Stream Technologies',
      duration:'March 2025 - Present',
      location :'Remote',
      description : 'Built the frontend for the client product using react and developed backend apis using the NEST.js framework'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Seequenze Technologies',
      duration: 'April 2024 - September 2024',
      location: 'Remote',
      description: 'Built the core frontend UI for a Figma plugin with React, developed backend APIs using Node.js and Spring Boot, and created side projects to improve testing and integration.',
    },
    {
      title: 'Web developer Intern TA',
      company: 'Ansh InfoTech',
      duration: 'March 2024 - April 2024',
      location: 'Ludhiana (Punjab)',
      description: 'Assisted in teaching web development concepts, supported students with coding challenges, and provided guidance in debugging and troubleshooting their projects.',
    }
  ];

  return (
  <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">My Experience</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          A detailed overview of my professional journey and the roles I've taken on.
        </p>
      </motion.div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
            </div>
  
            {/* Company */}
            <div className="text-gray-400 mb-4">
              <span className="italic">at {experience.company}</span>
            </div>
  
            {/* Location and Duration now separated for clarity */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-5 h-5" />
                  <span>{experience.duration}</span>
                </div>
              </div>
  
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-5 h-5" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
  
            {/* Description */}
            <p className="text-gray-300">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  
    {/* Horizontal Line for separation */}
    <hr className="mt-16 border-gray-700" />
  </section>
  
  );
};

export default MyExperience;
