# Hero 섹션 레이아웃 대안

## 1. 하이브리드 접근법 (추천) ✨
배경은 전체 너비, 콘텐츠만 container 적용:

```tsx
<section className="relative min-h-screen">
  {/* 배경 요소는 전체 너비 */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
  
  {/* 콘텐츠만 container 적용 */}
  <div className="container-custom relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* 콘텐츠 */}
    </div>
  </div>
</section>
```

### 📖 Tailwind 클래스 상세 분석

#### Section 레벨 클래스
```tsx
<section className="relative min-h-screen">
```

| 클래스 | 원본 CSS | 설명 | 의도 |
|--------|---------|------|------|
| `relative` | `position: relative;` | 상대 위치 지정 | 자식 요소의 `absolute` 포지셔닝을 위한 컨텍스트 생성 |
| `min-h-screen` | `min-height: 100vh;` | 최소 높이를 뷰포트 전체로 설정 | Hero 섹션이 화면 전체를 채우도록 보장 |

#### 배경 레이어 클래스
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
```

| 클래스 | 원본 CSS | 설명 | 의도 |
|--------|---------|------|------|
| `absolute` | `position: absolute;` | 절대 위치 지정 | 일반 문서 흐름에서 제외, 부모 요소 기준 배치 |
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0;` | 모든 방향에서 0px | 부모 요소 전체를 완벽하게 덮음 |
| `bg-gradient-to-br` | `background-image: linear-gradient(to bottom right, ...);` | 좌상단→우하단 그라디언트 | 다이나믹한 배경 효과 |
| `from-blue-50` | `--tw-gradient-from: #eff6ff;` | 그라디언트 시작 색상 | 연한 파란색으로 시작 |
| `to-purple-50` | `--tw-gradient-to: #faf5ff;` | 그라디언트 종료 색상 | 연한 보라색으로 종료 |

#### 콘텐츠 컨테이너 클래스
```tsx
<div className="container-custom relative z-10">
```

| 클래스 | 원본 CSS | 설명 | 의도 |
|--------|---------|------|------|
| `container-custom` | `max-width: 1280px; margin: 0 auto; padding: 0 1rem;` | 커스텀 컨테이너 | 콘텐츠 최대 너비 제한과 중앙 정렬 |
| `relative` | `position: relative;` | 상대 위치 지정 | z-index가 작동하도록 포지션 컨텍스트 생성 |
| `z-10` | `z-index: 10;` | 쌓임 순서 10 | 배경 레이어(z-index: auto) 위에 콘텐츠 배치 |

#### 그리드 레이아웃 클래스
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
```

| 클래스 | 원본 CSS | 설명 | 의도 |
|--------|---------|------|------|
| `grid` | `display: grid;` | CSS Grid 컨테이너 | 그리드 레이아웃 시스템 활성화 |
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` | 1개 열 | 모바일에서 단일 열 레이아웃 |
| `lg:grid-cols-2` | `@media (min-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }` | 대형 화면에서 2개 열 | 데스크톱에서 좌우 분할 레이아웃 |
| `gap-12` | `gap: 3rem;` | 48px 간격 | 그리드 아이템 간 충분한 여백 확보 |

### 🎯 클래스 조합의 의도

#### 레이어링 전략
```
z-index 스택:
┌─────────────────────────────┐ z-10 (최상단)
│     콘텐츠 (container)      │
├─────────────────────────────┤ z-auto (중간)
│   배경 그라디언트 (전체)     │
├─────────────────────────────┤ z-0 (기본)
│      <section> 요소         │
└─────────────────────────────┘
```

#### 반응형 전략
```
모바일 (< 1024px):
┌─────────────────┐
│                 │
│   콘텐츠 A      │
│                 │
├─────────────────┤
│                 │
│   콘텐츠 B      │
│                 │
└─────────────────┘

데스크톱 (≥ 1024px):
┌──────────┬──────────┐
│          │          │
│ 콘텐츠 A │ 콘텐츠 B │
│          │          │
└──────────┴──────────┘
```

### 📊 적용 전후 비교

#### Before: Container만 사용
```tsx
<section className="container-custom">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* 콘텐츠 */}
  </div>
</section>
```

**시각적 결과:**
- ❌ 배경이 1280px로 제한됨
- ❌ 와이드 모니터에서 좌우 빈 공간
- ❌ 몰입감 부족
- ✅ 콘텐츠 가독성은 좋음

```
4K 모니터 (3840px):
┌─────────────────────────────────────────┐
│         │                    │          │
│  빈공간  │    Hero (1280px)   │   빈공간  │
│         │                    │          │
└─────────────────────────────────────────┘
```

#### After: 하이브리드 접근법
```tsx
<section className="relative min-h-screen">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
  <div className="container-custom relative z-10">
    {/* 콘텐츠 */}
  </div>
</section>
```

**시각적 결과:**
- ✅ 배경이 전체 너비로 확장
- ✅ 시각적 임팩트 극대화
- ✅ 콘텐츠는 여전히 읽기 좋은 너비
- ✅ 프로페셔널한 느낌

```
4K 모니터 (3840px):
┌─────────────────────────────────────────┐
│ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱ │ ← 배경 전체
│ ╱╱╱╱╱╱│                    │╱╱╱╱╱╱╱╱╱ │
│ ╱╱╱╱╱╱│   콘텐츠 (1280px)  │╱╱╱╱╱╱╱╱╱ │ ← 콘텐츠 제한
│ ╱╱╱╱╱╱│                    │╱╱╱╱╱╱╱╱╱ │
│ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱ │
└─────────────────────────────────────────┘
```

### 🔧 실제 구현 팁

#### 다크모드 대응
```tsx
<div className="absolute inset-0 
  bg-gradient-to-br 
  from-blue-50 to-purple-50 
  dark:from-gray-900 dark:to-purple-900" 
/>
```

#### 애니메이션 추가
```tsx
<div className="absolute inset-0 
  bg-gradient-to-br 
  from-blue-50 to-purple-50
  animate-gradient-shift" 
/>
```

```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
```

#### 성능 최적화
```tsx
<div className="absolute inset-0 
  bg-gradient-to-br 
  from-blue-50 to-purple-50
  will-change-transform
  transform-gpu" 
/>
```

## 2. 더 넓은 Container 사용
Hero 섹션만 특별히 넓은 container:

```tsx
<div className="container-hero">  {/* max-width: 1536px 또는 1920px */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* 콘텐츠 */}
  </div>
</div>
```

```css
.container-hero {
  max-width: 1536px;  /* container-custom(1280px)보다 256px 더 넓음 */
  margin: 0 auto;
  padding: 0 2rem;
}
```

## 3. 비대칭 레이아웃
텍스트는 제한, 이미지/그래픽은 확장:

```tsx
<section className="relative">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* 텍스트 영역 - container 유지 */}
    <div className="container-custom">
      <h1>Hello World!</h1>
      <p>Description...</p>
    </div>
    
    {/* 비주얼 영역 - 전체 너비 */}
    <div className="relative h-full">
      <img src="..." className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </div>
</section>
```

## 4. 전체 너비 + 내부 제약
전체 너비 사용하되, 텍스트만 max-width 적용:

```tsx
<section className="px-4 md:px-8 lg:px-16">  {/* 전체 너비, 패딩만 */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="max-w-3xl">  {/* 텍스트만 너비 제한 */}
        Hello World!
      </h1>
      <p className="max-w-2xl">  {/* 가독성을 위한 제한 */}
        Description...
      </p>
    </div>
  </div>
</section>
```

## 5. 뷰포트 기반 동적 너비
화면 크기에 따라 자동 조절:

```css
.dynamic-container {
  width: min(90vw, 1920px);  /* 뷰포트의 90% 또는 최대 1920px */
  margin: 0 auto;
}
```

## 비교 테이블

| 방식 | 시각적 임팩트 | 가독성 | 일관성 | 구현 복잡도 |
|------|-------------|--------|--------|------------|
| Container 유지 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 하이브리드 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 넓은 Container | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 비대칭 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 전체 너비 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |

## 최종 추천
**하이브리드 접근법**이 가장 균형 잡힌 선택입니다:
- 시각적 임팩트 극대화
- 콘텐츠 가독성 유지
- 다른 섹션과의 일관성 보장
- 구현이 간단하고 유지보수 용이