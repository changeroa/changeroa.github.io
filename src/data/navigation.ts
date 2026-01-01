import type { Lang } from '../i18n/translations';

export interface NavLink {
  href: string;
  text: string;
}

export const introLinks: Record<Lang, NavLink[]> = {
  ko: [
    { href: '/ko/portfolio', text: '프로젝트' },
    { href: '/ko/about', text: '기술 스택' },
    { href: '/ko/blog', text: '블로그' },
    { href: '#', text: '디지털 가든' },
    { href: '/ko/contact', text: '연락처' },
  ],
  en: [
    { href: '/en/portfolio', text: 'Projects' },
    { href: '/en/about', text: 'Tech Stack' },
    { href: '/en/blog', text: 'Blog' },
    { href: '#', text: 'Digital Garden' },
    { href: '/en/contact', text: 'Contact' },
  ],
};

export function getIntroLinks(lang: Lang): NavLink[] {
  return [
    { href: `/${lang}/portfolio`, text: lang === 'ko' ? '프로젝트' : 'Projects' },
    { href: `/${lang}/about`, text: lang === 'ko' ? '기술 스택' : 'Tech Stack' },
    { href: `/${lang}/blog`, text: lang === 'ko' ? '블로그' : 'Blog' },
    { href: '#', text: lang === 'ko' ? '디지털 가든' : 'Digital Garden' },
    { href: `/${lang}/contact`, text: lang === 'ko' ? '연락처' : 'Contact' },
  ];
}
