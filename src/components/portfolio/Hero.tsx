import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 dark:from-primary/10 dark:to-accent/10" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              안녕하세요!<br />
              <span className="gradient-text">풀스택 개발자</span><br />
              입니다
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              React, TypeScript, Node.js를 활용한 모던 웹 애플리케이션 개발에 
              열정을 가지고 있습니다. 사용자 경험과 코드 품질을 중요하게 생각합니다.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                프로젝트 보기
              </Link>
              <Link
                to="/blog"
                className="px-8 py-3 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
              >
                블로그 읽기
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 gradient-bg rounded-full animate-gradient opacity-50 blur-3xl" />
              <div className="relative glass-effect rounded-full p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                        TypeScript
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                        AWS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;