# 🚀 Modern Developer Portfolio & Blog

Matt Williams 스타일의 모던한 개발자 포트폴리오 및 기술 블로그 웹사이트

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1-purple)

## ✨ Features

### 포트폴리오
- 🎨 **모던 디자인**: Matt Williams 스타일의 미니멀하고 깔끔한 디자인
- 🌗 **다크모드**: 시스템 설정 연동 및 수동 토글 지원
- 📱 **반응형**: 모바일, 태블릿, 데스크톱 완벽 지원
- ⚡ **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- 🎯 **섹션 구성**: Hero, About, Skills, Projects, Experience, Contact

### 블로그
- 📝 **Markdown 지원**: 마크다운으로 간편한 포스트 작성
- 🔍 **검색 기능**: Fuse.js를 활용한 빠른 클라이언트 사이드 검색
- 🏷️ **태그 필터링**: 기술 스택별 포스트 분류
- 💅 **코드 하이라이팅**: 문법 강조 지원
- ⏱️ **읽기 시간**: 예상 읽기 시간 표시

### 기술 스택
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Blog**: React Markdown, Gray Matter
- **Deployment**: AWS S3 + CloudFront

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

개발 서버가 http://localhost:5173 에서 실행됩니다.

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/      # 포트폴리오 컴포넌트
│   │   ├── blog/          # 블로그 컴포넌트
│   │   ├── shared/        # 공통 컴포넌트
│   │   └── ui/           # UI 컴포넌트
│   ├── pages/            # 페이지 컴포넌트
│   ├── utils/            # 유틸리티 함수
│   ├── types/            # TypeScript 타입 정의
│   ├── data/            # 정적 데이터
│   └── styles/          # 스타일 파일
├── public/              # 정적 자산
├── scripts/             # 배포 스크립트
└── .github/workflows/   # GitHub Actions
```

## 🎨 Customization

### 개인 정보 수정

1. `src/components/portfolio/Hero.tsx` - 메인 소개 수정
2. `src/components/portfolio/About.tsx` - 자기소개 수정
3. `src/components/portfolio/Skills.tsx` - 기술 스택 수정
4. `src/components/portfolio/Projects.tsx` - 프로젝트 추가/수정
5. `src/components/portfolio/Experience.tsx` - 경력 사항 수정

### 블로그 포스트 추가

`src/utils/blogUtils.ts` 파일에서 새로운 포스트를 추가하거나, 
추후 마크다운 파일을 직접 읽도록 수정할 수 있습니다.

```typescript
const newPost: BlogPost = {
  slug: 'my-new-post',
  title: '새로운 포스트 제목',
  date: '2024-08-25',
  excerpt: '포스트 요약',
  content: '# 마크다운 콘텐츠',
  tags: ['React', 'TypeScript'],
  featured: true,
  readingTime: 5
};
```

### 색상 테마 수정

`tailwind.config.js`에서 색상을 커스터마이징할 수 있습니다:

```javascript
colors: {
  primary: {
    DEFAULT: '#6366f1',  // 메인 색상
    dark: '#8b5cf6',     // 다크 모드 메인 색상
  }
}
```

## 🚀 Deployment

### AWS S3 + CloudFront

1. AWS 계정 설정 (자세한 내용은 `scripts/setup-aws.md` 참조)
2. GitHub Secrets 설정:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `S3_BUCKET_NAME`
   - `CLOUDFRONT_DISTRIBUTION_ID`

3. 배포:
```bash
# 수동 배포
npm run build
npm run deploy:aws

# 자동 배포 (main 브랜치 push 시)
git push origin main
```

### 다른 플랫폼

- **Vercel**: `vercel` CLI 사용
- **Netlify**: GitHub 연동 후 자동 배포
- **GitHub Pages**: `gh-pages` 패키지 사용

## 📝 Development

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 린트 체크
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - 자유롭게 사용하고 수정하세요!

## 🙏 Acknowledgments

- Matt Williams의 디자인 철학에서 영감을 받았습니다
- React, Vite, Tailwind CSS 커뮤니티에 감사드립니다

## 📧 Contact

질문이나 제안사항이 있으시면 언제든 연락주세요!

- Email: contact@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

---

Made with ❤️ and lots of ☕
