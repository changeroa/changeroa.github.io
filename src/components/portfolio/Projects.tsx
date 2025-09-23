import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 실시간 재고 관리와 결제 시스템 구현.',
      image: '/project-images/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/changeroa/ecommerce-platform',
      blogPost: '/blog/ecommerce-platform-case-study'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '팀 협업을 위한 실시간 태스크 관리 애플리케이션. WebSocket을 활용한 실시간 동기화.',
      image: '/project-images/task-app.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/changeroa/task-management',
      blogPost: '/blog/realtime-collaboration-websocket'
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'OpenAI API를 활용한 지능형 챗봇 서비스. 자연어 처리와 컨텍스트 관리 구현.',
      image: '/project-images/ai-chat.jpg',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/changeroa/ai-chat-assistant',
      blogPost: '/blog/building-ai-chat-assistant'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: '실시간 데이터 시각화 대시보드. D3.js를 활용한 인터랙티브 차트.',
      image: '/project-images/dashboard.jpg',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/changeroa/analytics-dashboard',
      blogPost: null
    },
    {
      id: 5,
      title: 'Social Media App',
      description: '소셜 미디어 플랫폼 클론. 무한 스크롤, 실시간 알림, 이미지 최적화.',
      image: '/project-images/social.jpg',
      tags: ['React Native', 'GraphQL', 'AWS S3', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/changeroa/social-media-app',
      blogPost: '/blog/optimizing-social-media-feed'
    },
    {
      id: 6,
      title: 'DevOps Pipeline',
      description: 'GitHub Actions를 활용한 CI/CD 파이프라인 구축. 자동화된 테스트와 배포.',
      image: '/project-images/devops.jpg',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
      liveUrl: null,
      githubUrl: 'https://github.com/changeroa/devops-pipeline',
      blogPost: '/blog/cicd-pipeline-best-practices'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-cream-50/90 dark:bg-cocoa-900/90 backdrop-blur-sm">
      <div className="container-custom px-8 md:px-16 lg:px-24 gap-x-16 gap-y-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-cocoa-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section - Top Half */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-terra-100 via-lavender-100 to-sage-100 dark:from-terra-900/20 dark:via-lavender-900/20 dark:to-sage-900/20">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-cocoa-300 dark:text-cocoa-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-cocoa-800 font-medium rounded-lg hover:bg-cream-100 transition-colors duration-200"
                    >
                      자세히 보기
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cocoa-800 text-white font-medium rounded-lg hover:bg-cocoa-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub 바로가기
                  </a>
                </div>
              </div>

              {/* Content Section - Bottom Half */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-cocoa-800 dark:text-cream-100 mb-3 group-hover:text-terra-600 dark:group-hover:text-terra-400 transition-colors duration-300 break-words">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-cocoa-600 dark:text-cream-300 text-sm leading-relaxed mb-4 break-words overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-terra-100 to-lavender-100 dark:from-terra-900/30 dark:to-lavender-900/30 text-terra-700 dark:text-terra-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;