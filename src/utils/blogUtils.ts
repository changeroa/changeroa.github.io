import type { BlogPost } from '../types/blog';

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'react-performance-optimization',
    title: 'React 성능 최적화 완벽 가이드',
    date: '2024-08-25',
    excerpt: 'React 앱의 성능을 극대화하는 실전 기법들을 소개합니다. useMemo, useCallback, React.memo 등을 활용한 최적화 방법을 알아봅니다.',
    content: `# React 성능 최적화 완벽 가이드

React 애플리케이션의 성능을 최적화하는 것은 사용자 경험을 향상시키는 핵심 요소입니다. 이 글에서는 실제 프로젝트에서 적용할 수 있는 다양한 최적화 기법들을 소개합니다.

## 1. React.memo 활용하기

React.memo는 컴포넌트의 props가 변경되지 않았을 때 리렌더링을 방지합니다.

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  // 복잡한 연산이나 렌더링 로직
  return <div>{data}</div>;
});
\`\`\`

## 2. useMemo와 useCallback 올바른 사용법

### useMemo
계산 비용이 높은 값을 메모이제이션합니다.

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);
\`\`\`

### useCallback
함수를 메모이제이션하여 불필요한 재생성을 방지합니다.

\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

## 3. 코드 스플리팅으로 번들 크기 줄이기

React.lazy와 Suspense를 활용하여 컴포넌트를 동적으로 로드합니다.

\`\`\`javascript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## 4. 가상화를 통한 대용량 리스트 렌더링

react-window나 react-virtualized를 사용하여 대용량 리스트를 효율적으로 렌더링합니다.

## 결론

React 성능 최적화는 단순히 기술적인 문제가 아니라 사용자 경험을 개선하는 중요한 과정입니다. 상황에 맞는 적절한 최적화 기법을 선택하여 적용하는 것이 중요합니다.`,
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    featured: true,
    coverImage: '/blog-images/react-optimization.jpg',
    readingTime: 8,
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'TypeScript 고급 패턴과 타입 체조',
    date: '2024-08-20',
    excerpt: 'TypeScript의 고급 타입 시스템을 활용한 실전 패턴들을 소개합니다. 제네릭, 조건부 타입, 템플릿 리터럴 타입 등을 다룹니다.',
    content: `# TypeScript 고급 패턴과 타입 체조

TypeScript의 강력한 타입 시스템을 활용하면 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.

## 제네릭 활용하기

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
\`\`\`

## 조건부 타입

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type Result = IsString<"hello">; // true
\`\`\`

## 유틸리티 타입 활용

TypeScript는 다양한 내장 유틸리티 타입을 제공합니다.

- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>

이러한 타입들을 조합하여 복잡한 타입을 표현할 수 있습니다.`,
    tags: ['TypeScript', 'JavaScript', 'Types', 'Advanced'],
    featured: false,
    coverImage: '/blog-images/typescript-patterns.jpg',
    readingTime: 10,
  },
  {
    slug: 'nodejs-microservices',
    title: 'Node.js로 마이크로서비스 아키텍처 구축하기',
    date: '2024-08-15',
    excerpt: 'Node.js와 Docker를 활용한 마이크로서비스 아키텍처 구축 방법을 단계별로 설명합니다.',
    content: `# Node.js로 마이크로서비스 아키텍처 구축하기

마이크로서비스 아키텍처는 대규모 애플리케이션을 작은 서비스들로 분리하여 개발, 배포, 확장을 용이하게 합니다.

## 아키텍처 설계

1. API Gateway
2. Service Discovery
3. Message Queue
4. Database per Service

## Docker를 활용한 컨테이너화

각 서비스를 독립적인 컨테이너로 관리합니다.

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## 서비스 간 통신

- REST API
- gRPC
- Message Queue (RabbitMQ, Kafka)

마이크로서비스는 복잡성을 증가시킬 수 있으므로, 프로젝트 규모와 요구사항을 고려하여 도입해야 합니다.`,
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture'],
    featured: true,
    coverImage: '/blog-images/microservices.jpg',
    readingTime: 12,
  },
  {
    slug: 'aws-cicd-pipeline',
    title: 'AWS로 CI/CD 파이프라인 구축하기',
    date: '2024-08-10',
    excerpt: 'GitHub Actions와 AWS를 활용한 자동화된 배포 파이프라인 구축 과정을 상세히 설명합니다.',
    content: `# AWS로 CI/CD 파이프라인 구축하기

지속적 통합과 배포는 현대 소프트웨어 개발의 핵심입니다.

## GitHub Actions 설정

\`\`\`yaml
name: Deploy to AWS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to S3
        run: aws s3 sync dist/ s3://my-bucket
\`\`\`

## AWS 서비스 구성

- S3: 정적 웹사이트 호스팅
- CloudFront: CDN
- Route 53: DNS 관리

자동화된 파이프라인을 통해 개발 생산성을 크게 향상시킬 수 있습니다.`,
    tags: ['AWS', 'CI/CD', 'DevOps', 'GitHub Actions'],
    featured: false,
    coverImage: '/blog-images/cicd.jpg',
    readingTime: 7,
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS 실전 팁과 커스텀 컴포넌트',
    date: '2024-08-05',
    excerpt: 'Tailwind CSS를 효율적으로 사용하는 방법과 재사용 가능한 커스텀 컴포넌트 패턴을 소개합니다.',
    content: `# Tailwind CSS 실전 팁과 커스텀 컴포넌트

Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 빠른 개발과 일관된 디자인을 가능하게 합니다.

## 커스텀 컴포넌트 패턴

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
\`\`\`

## 반응형 디자인

Tailwind의 반응형 유틸리티를 활용하여 모바일 퍼스트 디자인을 구현합니다.

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Content -->
</div>
\`\`\`

Tailwind CSS는 개발 속도를 크게 향상시키며, 디자인 시스템 구축에 매우 효과적입니다.`,
    tags: ['CSS', 'Tailwind', 'Frontend', 'Design'],
    featured: false,
    coverImage: '/blog-images/tailwind.jpg',
    readingTime: 6,
  },
];

export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  return blogPosts.find(post => post.slug === slug) || null;
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.tags?.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};