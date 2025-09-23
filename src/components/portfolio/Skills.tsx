import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        'React',
        'TypeScript',
        'React Native',
        'Tailwind CSS',
        'Redux Toolkit',
        'TanStack Query',
      ],
    },
    {
      title: 'Backend & AI',
      icon: '⚙️',
      skills: [
        'Node.js / Express',
        'FastAPI (Python)',
        'PyTorch',
        'TensorFlow',
        'LangChain / RAG',
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        'AWS (EC2, Lambda)',
        'Docker',
        'GitHub Actions (CI/CD)',
        'Nginx / Reverse Proxy',
        'TLS / HTTPS Config',
        'Cloudflare / Domain Mgmt',
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        'MongoDB (Mongoose)',
        'Qdrant (Vector DB)',
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="bg-gradient-to-r from-terra-500 to-lavender-500 bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-effect rounded-2xl p-6 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 rounded-full text-sm font-medium hover:bg-terra-500 hover:text-white dark:hover:bg-terra-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 
              'Jest', 
              'Webpack', 
              'Vite', 
              'Figma', 
              'Postman', 
              'Linux (Ubuntu)', 
              'code-server', 
              'Bash Scripting'
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 rounded-full text-sm font-medium hover:bg-terra-500 hover:text-white dark:hover:bg-terra-400 transition-colors cursor-pointer"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
