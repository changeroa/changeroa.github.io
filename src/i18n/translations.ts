export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Home page
    'home.greeting': "Hey, I'm",
    'home.tagline': 'Full-stack Developer',
    'home.description': 'Building digital experiences with clean code and creative solutions.',
    'home.cta.projects': 'Projects',
    'home.cta.skills': 'Tech Stack',
    'home.cta.blog': 'Blog',
    'home.cta.garden': 'Digital Garden',
    'home.cta.contact': 'Contact',

    // Work page
    'work.title': 'Work Experience',
    'work.empty.title': 'This space is reserved for you!',
    'work.empty.subtitle': 'Be the first to hire me and have your company featured right here.',
    'work.quote.1': 'Every senior developer started with zero work experience.',
    'work.quote.2': 'The only difference? Someone gave them a chance.',
    'work.quote.author': '- Future testimonial from you, hopefully',
    'work.cta.text': 'Ready to be a trailblazer?',
    'work.cta.button': "Let's Talk",
    'work.perks.title': 'What you get:',
    'work.perks.1': 'A developer hungry to prove themselves',
    'work.perks.2': 'Fresh perspectives and modern approaches',
    'work.perks.3': 'Someone who actually reads documentation',
    'work.perks.4': 'Eternal gratitude (and great code)',

    // Portfolio page
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'A collection of projects I\'ve worked on',
    'portfolio.empty': 'Projects coming soon! Check back later.',
    'portfolio.code': 'Code',
    'portfolio.demo': 'Demo',

    // Blog page
    'blog.title': 'Blog',
    'blog.subtitle': 'Thoughts, learnings, and random musings',
    'blog.empty': 'No posts yet. Check back soon!',
    'blog.readMore': 'Read more',
    'blog.backToBlog': 'Back to blog',

    // About page
    'about.title': 'About Me',
    'about.greeting': 'Hey there!',
    'about.intro': "I'm <strong>Victor Jaepyo Jo</strong>, a full-stack developer passionate about building things that live on the internet. I enjoy creating everything from small business sites to rich interactive web apps.",
    'about.whatIDo.title': 'What I Do',
    'about.whatIDo.content': "I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
    'about.skills.title': 'Technologies I Work With',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.tools': 'Tools',
    'about.notCoding.title': "When I'm Not Coding",
    'about.notCoding.content': 'You can find me exploring new technologies, contributing to open source, or learning something new. I believe in continuous learning and pushing the boundaries of what\'s possible.',

    // Contact page
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Have a project in mind? Want to collaborate? Or just want to say hi?\nI'd love to hear from you!",
    'contact.connect': "Let's Connect",
    'contact.description': "I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, my inbox is always open.",
    'contact.sayHello': 'Say Hello',

    // Footer
    'footer.credit': 'Designed & Built by Victor Jaepyo Jo',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.work': '경력',
    'nav.portfolio': '포트폴리오',
    'nav.blog': '블로그',
    'nav.about': '소개',
    'nav.contact': '연락처',

    // Home page
    'home.greeting': '안녕하세요,',
    'home.tagline': '풀스택 개발자',
    'home.description': '깔끔한 코드와 창의적인 솔루션으로 디지털 경험을 만들어갑니다.',
    'home.cta.projects': '프로젝트',
    'home.cta.skills': '기술 스택',
    'home.cta.blog': '블로그',
    'home.cta.garden': '디지털 가든',
    'home.cta.contact': '연락처',

    // Work page
    'work.title': '경력',
    'work.empty.title': '이 자리는 당신을 위해 비워뒀어요!',
    'work.empty.subtitle': '저를 채용하시면 이곳에 첫 번째로 회사가 소개됩니다.',
    'work.quote.1': '모든 시니어 개발자도 경력 0년에서 시작했습니다.',
    'work.quote.2': '차이점은? 누군가가 기회를 줬다는 것뿐.',
    'work.quote.author': '- 아마도 미래의 당신이 남길 추천사',
    'work.cta.text': '선구자가 될 준비 되셨나요?',
    'work.cta.button': '연락하기',
    'work.perks.title': '채용하시면:',
    'work.perks.1': '증명하고 싶어하는 열정적인 개발자',
    'work.perks.2': '신선한 관점과 최신 접근 방식',
    'work.perks.3': '문서를 진짜로 읽는 사람',
    'work.perks.4': '영원한 감사함 (그리고 좋은 코드)',

    // Portfolio page
    'portfolio.title': '포트폴리오',
    'portfolio.subtitle': '제가 작업한 프로젝트 모음',
    'portfolio.empty': '프로젝트 준비 중입니다. 곧 업데이트됩니다!',
    'portfolio.code': '코드',
    'portfolio.demo': '데모',

    // Blog page
    'blog.title': '블로그',
    'blog.subtitle': '생각, 배움, 그리고 이런저런 이야기',
    'blog.empty': '아직 글이 없습니다. 곧 올라올 예정이에요!',
    'blog.readMore': '더 읽기',
    'blog.backToBlog': '블로그로 돌아가기',

    // About page
    'about.title': '소개',
    'about.greeting': '안녕하세요!',
    'about.intro': '저는 <strong>조재표(Victor)</strong>입니다. 인터넷에 살아있는 것들을 만드는 것을 좋아하는 풀스택 개발자입니다. 작은 비즈니스 사이트부터 풍부한 인터랙티브 웹 앱까지 다양하게 만들고 있어요.',
    'about.whatIDo.title': '하는 일',
    'about.whatIDo.content': '뛰어난 디지털 경험을 만드는 것을 전문으로 합니다. 현재는 접근성 있고 사람 중심적인 제품을 만드는 데 집중하고 있습니다.',
    'about.skills.title': '사용하는 기술',
    'about.skills.frontend': '프론트엔드',
    'about.skills.backend': '백엔드',
    'about.skills.tools': '도구',
    'about.notCoding.title': '코딩하지 않을 때',
    'about.notCoding.content': '새로운 기술을 탐구하거나 오픈소스에 기여하거나 새로운 것을 배우고 있습니다. 지속적인 학습과 가능성의 경계를 넓히는 것을 믿습니다.',

    // Contact page
    'contact.title': '연락하기',
    'contact.subtitle': '프로젝트가 있으신가요? 협업하고 싶으신가요? 아니면 그냥 인사하고 싶으신가요?\n연락 주세요!',
    'contact.connect': '연결하기',
    'contact.description': '현재 새로운 기회와 흥미로운 프로젝트에 열려 있습니다. 질문이 있으시거나 인사를 하고 싶으시면 언제든 연락 주세요.',
    'contact.sayHello': '인사하기',

    // Footer
    'footer.credit': 'Victor Jaepyo Jo가 디자인하고 개발했습니다',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|ko)/, '');
  return `/${lang}${cleanPath || '/'}`;
}
