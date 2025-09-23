import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      description: '대규모 이커머스 플랫폼 개발 및 마이크로서비스 아키텍처 설계',
      technologies: ['React', 'Node.js', 'AWS', 'Docker'],
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      description: 'SaaS 플랫폼 개발, RESTful API 설계 및 프론트엔드 개발',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
    },
    {
      year: '2020 - 2021',
      title: 'Junior Frontend Developer',
      company: 'Web Agency',
      description: '클라이언트 웹사이트 개발 및 반응형 디자인 구현',
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack'],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-cream-300 dark:bg-cocoa-700" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <span className="text-sm font-medium text-terra-500 dark:text-terra-400">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-cocoa-600 dark:text-cream-300 mb-3">{exp.company}</h4>
                  <p className="text-cocoa-600 dark:text-cream-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-terra-500/10 dark:bg-terra-500/20 text-terra-600 dark:text-terra-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terra-500 dark:bg-terra-400 rounded-full border-4 border-cream-50 dark:border-cocoa-900" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;