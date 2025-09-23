import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section-padding bg-cream-50/90 dark:bg-cocoa-900/90 backdrop-blur-sm">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeInUp}
        >
          About <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-300 to-lavender-300 rounded-2xl opacity-30 blur-2xl" />
              <div className="relative bg-cream-50/80 dark:bg-cocoa-800/80 backdrop-blur-md rounded-2xl p-8 border border-cream-300/50 dark:border-cocoa-700/50">
                <div className="text-center space-y-2">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-cocoa-700 dark:text-cream-100">
                      Victor Jaepyo Jo
                    </h1>
                    <div className="hidden md:block w-px h-8 bg-terra-300 dark:bg-terra-600"></div>
                    <p className="text-xl md:text-2xl font-semibold text-cocoa-600 dark:text-cream-200">
                      Full Stack Developer
                    </p>
                  </div>
    
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">
                  학력
                </h3>
                <div className="space-y-4">
                  <div className="group bg-gradient-to-r from-lavender-50/80 to-cream-50/80 dark:from-lavender-900/20 dark:to-cream-900/20 rounded-xl p-4 border border-lavender-200/50 dark:border-lavender-700/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base md:text-lg text-cocoa-700 dark:text-cream-100">
                          한국외국어대학교 (Hankuk University of Foreign Studies)
                        </h4>
                        <p className="text-sm md:text-base text-terra-600 dark:text-terra-400 font-medium mt-1">
                          중국어통번역학과, 컴퓨터공학 복수전공
                        </p>
                        <p className="text-xs md:text-sm text-cocoa-500 dark:text-cream-400 mt-1">
                          2019년 3월 - 2026년 2월
                        </p>
                        <div className="mt-2 inline-flex items-center gap-2 bg-cream-100/80 dark:bg-cocoa-700/50 rounded-lg px-3 py-1">
                          <span className="text-xs font-medium text-cocoa-600 dark:text-cream-300">
                            동아리: DAT - Data Analysis & Technology
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-sage-50/80 to-cream-50/80 dark:from-sage-900/20 dark:to-cream-900/20 rounded-xl p-4 border border-sage-200/50 dark:border-sage-700/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-2xl">🏫</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base md:text-lg text-cocoa-700 dark:text-cream-100">
                          서울외국어고등학교 (Seoul Foreign Language High School)
                        </h4>
                        <p className="text-sm md:text-base text-terra-600 dark:text-terra-400 font-medium mt-1">
                          일본어과 졸업
                        </p>
                        <p className="text-xs md:text-sm text-cocoa-500 dark:text-cream-400 mt-1">
                          2014년 3월 - 2017년 2월
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-lavender-500 to-terra-500 bg-clip-text text-transparent">
                  핵심 가치
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group bg-cream-50/60 dark:bg-cocoa-800/60 backdrop-blur-sm rounded-xl p-4 border border-cream-200 dark:border-cocoa-700 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-xl">🤖</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-cocoa-700 dark:text-cream-100 mb-1">AI와의 협업</h4>
                        <p className="text-xs text-cocoa-600 dark:text-cream-300 leading-relaxed">
                          AI를 파트너로 두고 반복 구현은 위임, 설계·판단에 집중
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-cream-50/60 dark:bg-cocoa-800/60 backdrop-blur-sm rounded-xl p-4 border border-cream-200 dark:border-cocoa-700 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-terra-400 to-terra-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-xl">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-cocoa-700 dark:text-cream-100 mb-1">문제 정의</h4>
                        <p className="text-xs text-cocoa-600 dark:text-cream-300 leading-relaxed">
                          문제를 구조적으로 분해하고 실험 가능한 단위로 재설계
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-cream-50/60 dark:bg-cocoa-800/60 backdrop-blur-sm rounded-xl p-4 border border-cream-200 dark:border-cocoa-700 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-xl">📚</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-cocoa-700 dark:text-cream-100 mb-1">주체적 학습</h4>
                        <p className="text-xs text-cocoa-600 dark:text-cream-300 leading-relaxed">
                          기초부터 트렌드까지 필요한 영역을 지속적으로 학습
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-cream-50/60 dark:bg-cocoa-800/60 backdrop-blur-sm rounded-xl p-4 border border-cream-200 dark:border-cocoa-700 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cream-400 to-cream-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <span className="text-xl">🚀</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-cocoa-700 dark:text-cream-100 mb-1">빠른 실행</h4>
                        <p className="text-xs text-cocoa-600 dark:text-cream-300 leading-relaxed">
                          아이디어를 빠르게 프로토타입으로 구현하고 반복 개선
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cream-100 to-lavender-50 dark:from-cocoa-800/20 dark:to-lavender-900/20 rounded-xl p-4 border border-cream-300/50 dark:border-cocoa-700/30">
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-sage-500 to-lavender-500 bg-clip-text text-transparent">
                  현재 관심사
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-terra-400 to-lavender-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔬</span>
                  </div>
                  <p className="text-sm md:text-base text-cocoa-600 dark:text-cream-300 leading-relaxed">
                    최근에는 Coding-agent 툴의 한계 및 적절한 활용법을 실험적으로 탐구하는 데에 관심이 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;