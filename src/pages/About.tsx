import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Full Stack Developer</title>
        <meta name="description" content="풀스택 개발자 소개 - React, TypeScript, Node.js 전문" />
      </Helmet>

      <div className="min-h-screen pt-20">
        <div className="section-padding">
          <div className="container-custom max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h1>

            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">개발자로서의 철학</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  저는 사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다. 
                  단순히 동작하는 코드를 작성하는 것을 넘어, 유지보수가 쉽고 확장 가능한 
                  아키텍처를 설계하는 것을 목표로 합니다.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  최신 기술 트렌드를 지속적으로 학습하며, 이를 실제 프로젝트에 적용하여 
                  더 나은 솔루션을 제공하기 위해 노력하고 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🎓</span>
                    교육
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>컴퓨터공학 학사 (2016-2020)</li>
                    <li>AWS Certified Solutions Architect</li>
                    <li>Google Cloud Professional Developer</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏆</span>
                    성과
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>30% 성능 개선 달성</li>
                    <li>마이크로서비스 아키텍처 도입</li>
                    <li>CI/CD 파이프라인 구축</li>
                  </ul>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">기술 스택 상세</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      React를 주력으로 사용하며, TypeScript를 통해 타입 안전성을 보장합니다. 
                      Next.js를 활용한 SSR/SSG 구현 경험이 있으며, 상태 관리는 Redux와 Zustand를 
                      프로젝트 규모에 따라 선택적으로 사용합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Node.js와 Express를 활용한 RESTful API 설계에 능숙하며, GraphQL 서버 구축 
                      경험도 있습니다. PostgreSQL과 MongoDB를 데이터 특성에 따라 적절히 선택하여 
                      사용합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">DevOps & Cloud</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      AWS를 활용한 클라우드 인프라 구축과 Docker를 통한 컨테이너화, 
                      GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험이 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">연락하기</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  프로젝트 협업이나 기술적인 논의를 환영합니다. 
                  아래 채널을 통해 연락 주시면 빠르게 답변드리겠습니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contact@example.com"
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    이메일 보내기
                  </a>
                  <Link
                    to="/#contact"
                    className="px-6 py-3 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                  >
                    문의 양식
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;