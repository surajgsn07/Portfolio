import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p>&copy; {new Date().getFullYear()} Suraj Singh. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/surajgsn07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-singh-431010248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:surajgsn07@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;