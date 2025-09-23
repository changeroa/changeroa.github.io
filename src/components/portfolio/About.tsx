import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Skills data modeled after the referenced component
  const skillSets = [
    {
      title: 'Language',
      icon: '🧩',
      items: [
        { label: 'TypeScript', bg: '#2f74c0', fg: '#ffffff' },
        { label: 'JavaScript', bg: '#efd81d', fg: '#000000' },
        { label: 'Python', bg: '#3d75a4', fg: '#ffffff' },
        { label: 'Java', bg: '#d13d35', fg: '#ffffff' },
        { label: 'C', bg: '#ae36e0', fg: '#ffffff' },
      ],
    },
    {
      title: 'Frontend',
      icon: '🎨',
      items: [
        { label: 'React', bg: '#000000', fg: '#ffffff' },
        { label: 'React Router DOM', bg: '#f44250', fg: '#ffffff' },
        { label: 'Redux Toolkit + React Redux', bg: '#49443e', fg: '#ffffff' },
        { label: 'Tailwind CSS', bg: '#38bdf8', fg: '#ffffff' },
        { label: 'Framer Motion', bg: '#c43bad', fg: '#ffffff' },
        { label: 'Vite', bg: '#8869ee', fg: '#ffffff' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      items: [
        { label: 'Express.js', bg: '#404d59', fg: '#ffffff' },
        { label: 'FastAPI', bg: '#05998b', fg: '#ffffff' },
        { label: 'LangChain', bg: '#1b5c3d', fg: '#ffffff' },
        { label: 'Qdrant (Vector DB)', bg: '#ff6f61', fg: '#ffffff' },
        { label: 'MongoDB', bg: '#4db33d', fg: '#ffffff' },
      ],
    },
    {
      title: 'Infra / DevOps',
      icon: '☁️',
      items: [
        { label: 'AWS EC2', bg: '#FF9900', fg: '#000000' },
        { label: 'AWS Lambda', bg: '#232F3E', fg: '#ffffff' },
        { label: 'AWS VPC & Security Groups', bg: '#146eb4', fg: '#ffffff' },
        { label: 'Nginx', bg: '#009639', fg: '#ffffff' },
        { label: 'Docker & Docker Compose', bg: '#0db7ed', fg: '#ffffff' },
        { label: 'GitHub Actions', bg: '#2088FF', fg: '#ffffff' },
        { label: 'CloudWatch (Alarms)', bg: '#FF4F8B', fg: '#ffffff' },
      ]
    },
  ];

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
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-cocoa-800 dark:text-cream-100 inline-block pb-2 border-b-2 border-cream-300 dark:border-cocoa-700">
                  ABOUT ME
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-3 mt-6">
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">👤</span>
                    <span className="text-sm md:text-base">이름: 조재표(Victor Jaepyo Jo)</span>
                  </div>
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">📅</span>
                    <span className="text-sm md:text-base">생년월일: 98.05.13</span>
                  </div>
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">📍</span>
                    <span className="text-sm md:text-base">위치: 서울특별시 노원구</span>
                  </div>
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">📞</span>
                    <span className="text-sm md:text-base">연락처: 010-5545-0513</span>
                  </div>
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">✉️</span>
                    <span className="text-sm md:text-base break-all">이메일: changeroa@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-cocoa-700 dark:text-cream-100">
                    <span className="text-lg">🎓</span>
                    <span className="text-sm md:text-base">학력: 한국외국어대학교 (중국어통번역, 컴퓨터공학)</span>
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
              {/* 기술 스택 (참고 레이아웃 반영) */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                  SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillSets.map((set) => (
                    <div key={set.title} className="glass-effect rounded-2xl p-6 border border-cream-300/50 dark:border-cocoa-700/40">
                      <div className="flex items-center gap-2 text-cocoa-800 dark:text-cream-100 mb-4">
                        <span className="text-2xl" aria-hidden>{set.icon}</span>
                        <div className="text-base md:text-lg font-semibold">{set.title}</div>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {set.items.map((item) => (
                          <li
                            key={item.label}
                            className="px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm"
                            style={{ backgroundColor: item.bg, color: item.fg }}
                          >
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
