import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 lg:gap-12">
          {/* Top Left - Name and Title */}
          <motion.div
            className="row-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cocoa-700 dark:text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              "Hello World!"<br />
              <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Full Stack Developer</span><br />
              Victor Jaepyo Jo
            </motion.h1>
          </motion.div>
          
          {/* Top Right - Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div 
              className="relative mx-auto lg:ml-auto"
              style={{ width: '144px', height: '144px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cream-300 to-lavender-400 rounded-full animate-gradient opacity-40 blur-sm" />
              <div className="relative glass-effect rounded-full p-1 flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Victor Jaepyo Jo - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Left - Description */}
          <motion.div
            className="row-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-cocoa-600 dark:text-cream-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate in Modern Web Development<br />
              Building Scalable and Efficient Applications
            </motion.p>
          </motion.div>
          
          {/* Bottom Right - Action Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gradient-to-r from-terra-500 to-terra-600 hover:from-terra-600 hover:to-terra-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Projects
              </button>
              <button
                onClick={() => window.location.href = '/blog'}
                className="px-8 py-3 bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 hover:bg-cream-200 dark:hover:bg-cocoa-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-cream-300 dark:border-cocoa-600"
              >
                Blog
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-cocoa-400 dark:text-cream-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
