import React from 'react';
import { motion } from 'framer-motion';
import { Mail,Github,Linkedin, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'surajgsn07@gmail.com',
      href: 'mailto:surajgsn07@gmail.com'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'Github',
      value: 'surajgsn07',
      href: "https://github.com/surajgsn07"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Suraj-Singh',
      href: "https://www.linkedin.com/in/suraj-singh-431010248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.label === 'Location' ? '_blank' : undefined}
              rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors flex items-center justify-center">
                    {info.value}
                    {info.label === 'Location' && (
                      <ExternalLink className="w-4 h-4 ml-1 inline-block" />
                    )}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;