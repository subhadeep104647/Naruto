import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen px-8 py-16 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl w-full rounded-3xl bg-black/40 backdrop-blur-xl border border-gray-800 p-10"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center text-5xl md:text-7xl font-serif tracking-[12px] bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent"
        >
          NARUTO LEGENDS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-center text-gray-400 mt-5 text-lg tracking-wider"
        >
          Exploring The Journey Of Legendary Shinobi
        </motion.p>

        {/* Quote */}
        <div className="text-center mt-14">
          <h2 className="text-2xl md:text-4xl italic text-orange-300 leading-relaxed">
            "A Shinobi's Story Is Not Measured By How They Live,
            <br />
            But By What They Achieve Before Their Death."
          </h2>

          <p className="text-gray-500 mt-4 text-lg">— Jiraiya</p>
        </div>

        {/* About */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl text-yellow-300 tracking-widest">
            ABOUT THE PROJECT
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Naruto Legends is an immersive anime-inspired web application
            dedicated to showcasing the growth, evolution, and achievements
            of some of the most iconic characters from the Naruto universe.
          </p>

          <p className="text-gray-300 text-lg leading-9">
            The project combines cinematic visuals, smooth animations,
            character lore, and evolution timelines to create a unique
            experience for Naruto fans. Every character page is carefully
            designed to represent their journey from childhood to legendary
            status.
          </p>

          <p className="text-gray-300 text-lg leading-9">
            Through interactive progression systems and animated statistics,
            users can witness how their favorite shinobi evolved over time,
            mastering powerful techniques and shaping the ninja world.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl text-green-300 tracking-widest mb-8">
            FEATURES
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Character Profiles",
              "Evolution Timelines",
              "Animated Statistics",
              "Framer Motion Animations",
              "Responsive UI Design",
              "Character Navigation System",
              "Glassmorphism Effects",
              "Naruto Universe Showcase",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white/5 border border-gray-700 rounded-xl p-4 text-gray-300"
              >
                ⚡ {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Evolution System */}
        <div className="mt-16">
          <h2 className="text-3xl text-cyan-300 tracking-widest mb-8">
            EVOLUTION SYSTEM
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Every featured shinobi includes a dedicated evolution page
            displaying multiple stages of their growth. Animated progression
            bars showcase the development of abilities such as:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              "Power",
              "Intelligence",
              "Sage Mode",
              "Medical Ninjutsu",
              "Flying Raijin",
              "Shadow Techniques",
              "Weapon Mastery",
              "Gentle Fist",
              "Eight Gates",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Characters */}
        <div className="mt-16">
          <h2 className="text-3xl text-orange-300 tracking-widest mb-8">
            FEATURED SHINOBI
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Explore legendary shinobi from every generation of the Naruto
            universe including:
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              "Naruto",
              "Sasuke",
              "Kakashi",
              "Minato",
              "Jiraiya",
              "Tsunade",
              "Hashirama",
              "Tobirama",
              "Rock Lee",
              "Neji",
              "Shikamaru",
              "Ino",
              "Choji",
              "Tenten",
              "Gaara",
              "Itachi",
            ].map((character) => (
              <div
                key={character}
                className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center text-gray-300"
              >
                {character}
              </div>
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="mt-16">
          <h2 className="text-3xl text-pink-300 tracking-widest mb-8">
            PROJECT STATS
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-300">20+</h3>
              <p className="text-gray-400 mt-2">Characters</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-300">100+</h3>
              <p className="text-gray-400 mt-2">Animations</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-green-300">5</h3>
              <p className="text-gray-400 mt-2">Evolution Stages</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-pink-300">50+</h3>
              <p className="text-gray-400 mt-2">Animated Stats</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h2 className="text-3xl text-purple-300 tracking-widest mb-8">
            TECHNOLOGIES USED
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "React JS",
              "React Router",
              "Framer Motion",
              "Tailwind CSS",
              "JavaScript",
              "JSX",
              "Lucide React",
              "Responsive Design",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Future Updates */}
        <div className="mt-16">
          <h2 className="text-3xl text-red-300 tracking-widest mb-8">
            FUTURE UPDATES
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>🔥 More Naruto & Boruto Characters</li>
            <li>🔥 Akatsuki Collection</li>
            <li>🔥 Character Comparison System</li>
            <li>🔥 Search & Filter Functionality</li>
            <li>🔥 Battle Simulator</li>
            <li>🔥 Background Music & Effects</li>
            <li>🔥 Character Ranking System</li>
            <li>🔥 Mobile App Version</li>
          </ul>
        </div>

        {/* Developer */}
        <div className="mt-16 border-t border-gray-800 pt-10">
          <h2 className="text-3xl text-yellow-300 tracking-widest mb-8">
            DEVELOPER
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Naruto Legends was developed as a fan-made project to celebrate
            the rich world of Naruto created by Masashi Kishimoto. This
            application demonstrates modern frontend development practices
            using React, Framer Motion, and Tailwind CSS while delivering a
            visually engaging experience for anime enthusiasts.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <h2 className="text-2xl tracking-[8px] bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent">
            BELIEVE IT!
          </h2>

          <p className="text-gray-500 mt-4">
            Dedicated to every Naruto fan around the world.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;