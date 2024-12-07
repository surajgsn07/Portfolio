import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, Trophy, Target, Zap, Award } from 'lucide-react';

const LeetCodeBadges = () => {
  const badges = [
    {
      name: "Problem Solving",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
      description: "Solved 100+ problems"
    },
    {
      name: "Dynamic Programming",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      description: "Mastered DP concepts"
    },
    {
      name: "Contest Rating",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      description: "Achieved 1800+ rating"
    },
    {
      name: "Daily Streak",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      description: "30+ days streak"
    },
    {
      name: "Interview Prep",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
      description: "Completed interview prep"
    },
    {
      name: "Top Performer",
      icon: <Award className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
      description: "Top 10% performer"
    }
  ];

  return (
    <div className="m-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white text-center mb-8"
      >
        LeetCode Achievements
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${badge.color} bg-opacity-10`}>
                  {badge.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{badge.name}</h4>
                  <p className="text-sm text-gray-400">{badge.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeetCodeBadges;