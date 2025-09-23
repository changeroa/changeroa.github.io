import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 실시간 재고 관리와 결제 시스템 구현',
      image: '/project-images/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      blogPost: '/blog/ecommerce-platform-case-study',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '팀 협업을 위한 실시간 태스크 관리 애플리케이션. WebSocket을 활용한 실시간 동기화',
      image: '/project-images/task-app.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      blogPost: '/blog/realtime-collaboration-websocket',
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'OpenAI API를 활용한 지능형 챗봇 서비스. 자연어 처리와 컨텍스트 관리 구현',
      image: '/project-images/ai-chat.jpg',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      blogPost: '/blog/building-ai-chat-assistant',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: '실시간 데이터 시각화 대시보드. D3.js를 활용한 인터랙티브 차트 구현',
      image: '/project-images/dashboard.jpg',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      blogPost: null,
    },
    {
      id: 5,
      title: 'Social Media App',
      description: '소셜 미디어 플랫폼 클론. 무한 스크롤, 실시간 알림, 이미지 최적화 구현',
      image: '/project-images/social.jpg',
      tags: ['React Native', 'GraphQL', 'AWS S3', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      blogPost: '/blog/optimizing-social-media-feed',
    },
    {
      id: 6,
      title: 'DevOps Pipeline',
      description: 'GitHub Actions를 활용한 CI/CD 파이프라인 구축. 자동화된 테스트와 배포',
      image: '/project-images/devops.jpg',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
      liveUrl: null,
      githubUrl: 'https://github.com',
      blogPost: '/blog/cicd-pipeline-best-practices',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-cream-50/90 dark:bg-cocoa-900/90 backdrop-blur-sm">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative glass-effect rounded-2xl overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-terra-400/30 to-lavender-400/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-sm font-medium text-cocoa-600 dark:text-cream-300">{project.title}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cocoa-700 dark:text-cream-100 group-hover:text-terra-500 dark:group-hover:text-terra-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cocoa-600 dark:text-cream-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-terra-500/10 dark:bg-terra-500/20 text-terra-600 dark:text-terra-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm font-medium text-cocoa-600 dark:text-cream-300 hover:text-terra-500 dark:hover:text-terra-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm font-medium text-cocoa-600 dark:text-cream-300 hover:text-terra-500 dark:hover:text-terra-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  {project.blogPost && (
                    <Link
                      to={project.blogPost}
                      className="flex items-center space-x-1 text-sm font-medium text-cocoa-600 dark:text-cream-300 hover:text-terra-500 dark:hover:text-terra-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Story</span>
                    </Link>
                  )}
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