import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeInUp}
        >
          About <span className="gradient-text">Me</span>
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
              <div className="absolute inset-0 gradient-bg rounded-2xl opacity-20 blur-2xl" />
              <div className="relative glass-effect rounded-2xl p-8">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/200x200/6366f1/ffffff?text=Profile';
                  }}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Your Name</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
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
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">개발자로서의 여정</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  3년간의 풀스택 개발 경험을 통해 사용자 중심의 웹 애플리케이션을 
                  개발해왔습니다. React와 TypeScript를 활용한 프론트엔드 개발부터 
                  Node.js 기반의 백엔드 시스템 구축, AWS를 활용한 클라우드 인프라 
                  구성까지 전반적인 개발 프로세스를 다룹니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">핵심 가치</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-medium">문제 해결</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        복잡한 문제를 단순하게
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <h4 className="font-medium">성능 최적화</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        빠르고 효율적인 코드
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-medium">지속적 학습</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        최신 기술 트렌드 팔로우
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-medium">협업</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        팀과 함께 성장
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">현재 관심사</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  최근에는 Next.js를 활용한 SSR/SSG, 마이크로서비스 아키텍처, 
                  그리고 AI 통합 웹 애플리케이션 개발에 관심을 가지고 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;