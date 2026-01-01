import type { Lang } from '../i18n/translations';

export const site = {
  name: {
    ko: '조재표',
    en: 'Victor Jaepyo Jo',
  },
  title: {
    ko: '조재표',
    en: 'Victor Jaepyo Jo',
  },
  displayNames: {
    ko: ['조재표', 'Victor'],
    en: ['Victor', 'Jaepyo Jo'],
  },
} as const;

export const identity = {
  nickname: 'victor',
  fullname: 'jaepyo jo',
} as const;

export const socials = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  email: 'mailto:hello@example.com',
} as const;

export const menuSocials = [
  { name: 'GitHub', href: socials.github },
  { name: 'LinkedIn', href: socials.linkedin },
  { name: 'Instagram', href: socials.instagram },
] as const;

export const seo = {
  defaultTitle: {
    ko: '조재표 | 풀스택 개발자',
    en: 'Victor Jaepyo Jo | Full-stack Developer',
  },
  defaultDescription: {
    ko: '조재표의 포트폴리오 - 풀스택 개발자',
    en: 'Portfolio of Victor Jaepyo Jo - Full-stack Developer',
  },
} as const;

export const socialCards = {
  ko: [
    { href: socials.github, icon: 'github', label: '팔로우', value: 'GitHub' },
    { href: socials.linkedin, icon: 'linkedin', label: '연결하기', value: 'LinkedIn' },
    { href: socials.instagram, icon: 'instagram', label: '팔로우', value: 'Instagram' },
    { href: socials.email, icon: 'email', label: '보내기', value: '이메일' },
  ],
  en: [
    { href: socials.github, icon: 'github', label: 'Follow', value: 'GitHub' },
    { href: socials.linkedin, icon: 'linkedin', label: 'Connect', value: 'LinkedIn' },
    { href: socials.instagram, icon: 'instagram', label: 'Follow', value: 'Instagram' },
    { href: socials.email, icon: 'email', label: 'Send', value: 'Email' },
  ],
} as const;

export function getPageTitle(page: string, lang: Lang): string {
  const titles: Record<string, Record<Lang, string>> = {
    home: { ko: '조재표', en: 'Victor Jaepyo Jo' },
    about: { ko: '소개 | 조재표', en: 'About | Victor Jaepyo Jo' },
    portfolio: { ko: '포트폴리오 | 조재표', en: 'Portfolio | Victor Jaepyo Jo' },
    work: { ko: '경력 | 조재표', en: 'Work | Victor Jaepyo Jo' },
    contact: { ko: '연락처 | 조재표', en: 'Contact | Victor Jaepyo Jo' },
    blog: { ko: '블로그 | 조재표', en: 'Blog | Victor Jaepyo Jo' },
  };
  return titles[page]?.[lang] ?? site.title[lang];
}
