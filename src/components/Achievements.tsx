import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);

  const achievements = [
    
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Hackathon winner 2025',
      description: 'Won a virtual hacakthon organized by UpSkillMafia',  
      year: '2025',
      image: 'code-looser.jpg'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: 'First Runner Up',
      description: 'First Runner up in a Inter-College DSA Competition',
      year: '2024',
      image: 'cgc.jpg'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'First Runner Up',
      description: 'First Runner up at UpSkillMafia Hackathon',
      year: '2024',
      image: 'upskillmafia.jpg'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'HacktoberFest 2024',
      description: 'HacktoberFest contest completed successfully ', 
      year: '2024',
      image: 'hacktoberfest.png'
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: 'First Runner up',
      description: 'First Runner up at Java Dsa Contest 2024 ', 
      year: '2024',
      image: 'java.jpg'
    },
    // Add more achievements here if necessary
  ];

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3); // Show first 3 by default

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent">
                  <div className="absolute bottom-4 left-4 bg-gray-900/90 p-2 rounded-full">
                    {achievement.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 mb-2">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                  {achievement.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Show More Button */}
        {achievements.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-500 transition-all duration-300 rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-purple-500/50"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
