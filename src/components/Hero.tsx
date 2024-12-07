import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-purple-400 text-lg mb-4">Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Suraj Singh
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A passionate full-stack developer crafting beautiful and functional web experiences. 
              Turning ideas into reality through elegant code.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4 justify-center md:justify-start"
            >
              {[
                { icon: <Github size={24} />, href: "https://github.com/surajgsn07" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/suraj-singh-431010248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: <Mail size={24} />, href: "mailto:surajgsn07@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-400 hover:text-purple-400 hover:bg-gray-700/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 mt-12 md:mt-0 relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0.4)",
                  "0 0 0 20px rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative w-64 h-64 mx-auto"
            >
              <img
                src="me.jpg"
                alt="Profile"
                className="w-full h-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;