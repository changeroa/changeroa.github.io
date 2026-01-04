# 개인정보 입력 체크리스트

포트폴리오에서 placeholder로 비워놓은 항목들입니다. 아래 정보를 채워주세요.

---

## 1. 소셜 미디어 링크 (필수)

**파일**: `src/data/site.ts` (23-28번 줄)

| 항목 | 현재 값 (placeholder) | 입력할 값 |
|------|----------------------|-----------|
| GitHub | `https://github.com` | `https://github.com/changeroa` |
| LinkedIn | `https://linkedin.com` | `www.linkedin.com/in/victor-jae-pyo-cho-089266223` |
| Instagram | `https://instagram.com` | `https://instagram.com/enjolie_laide` |
| Email | `mailto:hello@example.com` | `mailto:changeroa@gmail.com` |

---

## 2. Contact Form 설정 (필수)

**파일**: `src/pages/contact.astro` (27번 줄) 및 `src/pages/[lang]/contact.astro` (34번 줄)

현재 ContactForm 컴포넌트에 `formAction` prop이 비어있어 폼이 작동하지 않습니다.

아래 서비스 중 하나를 선택하여 설정하세요:

### Option A: Formspree (무료 50건/월)
1. https://formspree.io 에서 계정 생성
2. 새 Form 생성 후 Endpoint URL 복사
3. 아래 값 입력:

| 항목 | 입력할 값 |
|------|-----------|
| formAction | `https://formspree.io/f/_______________` |

### Option B: Web3Forms (무료 250건/월)
1. https://web3forms.com 에서 Access Key 발급
2. 아래 값 입력:

| 항목 | 입력할 값 |
|------|-----------|
| formAction | `https://api.web3forms.com/submit` |
| (hidden input 추가 필요) | access_key: `_______________` |

**수정 예시** (`src/pages/contact.astro`):
```astro
<!-- 현재 (27번 줄) -->
<ContactForm lang={lang} />

<!-- 수정 후 -->
<ContactForm lang={lang} formAction="https://formspree.io/f/YOUR_FORM_ID" />
```

---

## 3. 개인정보 확인 (선택)

**파일**: `src/data/site.ts`

현재 입력된 이름 정보가 맞는지 확인하세요:

| 항목 | 현재 값 | 수정 필요 시 |
|------|---------|-------------|
| 한국어 이름 | `조재표` | _______________ |
| 영어 이름 | `Victor Jaepyo Jo` | _______________ |
| nickname | `victor` | _______________ |
| fullname | `jaepyo jo` | _______________ |

---

## 4. 사이트 URL (확인)

**파일**: `astro.config.mjs` (8번 줄)

| 항목 | 현재 값 | 확인/수정 |
|------|---------|-----------|
| site | `https://changeroa.github.io` | _______________ |

> GitHub Pages가 아닌 커스텀 도메인을 사용할 경우 변경 필요

---

## 5. OG Image (필수 - 파일 없음!)

**위치**: `public/og-image.png`

소셜 미디어 공유 시 표시되는 이미지입니다. 현재 파일이 **없습니다**.

| 항목 | 권장 사항 |
|------|-----------|
| 파일명 | `og-image.png` |
| 위치 | `public/` 폴더 |
| 권장 크기 | 1200 x 630 픽셀 |
| 내용 | 이름, 직책, 간단한 소개 |

---

## 6. SEO 메타 정보 (자동 연동)

아래 파일들은 위 정보를 입력하면 자동으로 반영됩니다:

- `src/components/SEOHead.astro` - site.ts의 정보 사용
- `src/data/site.ts` - seo 객체의 title/description

> 추가 수정 불필요 (site.ts 수정 시 자동 반영)

---

## 빠른 수정 가이드

### 최소 필수 항목 (이것만 하면 작동!)

1. **소셜 링크 4개** - `src/data/site.ts` 수정
2. **Contact Form** - `src/pages/contact.astro` + `src/pages/[lang]/contact.astro` 수정
3. **OG Image** - `public/og-image.png` 파일 추가

### 수정할 파일 목록

```
src/data/site.ts                    # 소셜 링크, 이름
src/pages/contact.astro             # Contact Form (한국어)
src/pages/[lang]/contact.astro      # Contact Form (다국어)
public/og-image.png                 # OG 이미지 (새로 추가)
astro.config.mjs                    # 사이트 URL (필요시)
```

---

## 완료 체크리스트

- [ ] GitHub URL 입력
- [ ] LinkedIn URL 입력
- [ ] Instagram URL 입력
- [ ] Email 주소 입력
- [ ] Contact Form Action 설정
- [ ] OG Image 추가
- [ ] 사이트 URL 확인
- [ ] 이름 정보 확인
