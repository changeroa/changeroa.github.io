---
title: "Slack AI Hub"
subtitle: "다양한 AI 모델을 슬랙에서 통합 사용하는 확장 가능한 봇"
description: "OpenAI, Anthropic, Google Gemini 등 여러 AI 모델을 슬랙 워크스페이스에서 쉽게 전환하며 사용할 수 있는 엔터프라이즈급 봇. LangGraph 기반 에이전트 워크플로우 지원."

role: "풀스택 개발자 (솔로)"
duration: "2024.03 - 2024.05"
teamSize: "1인 프로젝트"
status: "maintained"

technologies:
  - "Python"
  - "Slack Bolt SDK"
  - "LangChain"
  - "LangGraph"
  - "OpenAI API"
  - "Anthropic API"
  - "Redis"
  - "Docker"

highlights:
  - "일 평균 메시지 처리량 500+ 달성"
  - "모델 전환 응답시간 < 100ms"
  - "플러그인 아키텍처로 신규 기능 추가 시간 80% 단축"

heroImage: "/images/portfolio/slack-ai-hub-hero.png"
gallery:
  - "/images/portfolio/slack-ai-hub-chat.png"
  - "/images/portfolio/slack-ai-hub-settings.png"
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"

github: "https://github.com/changeroa/slack-ai-hub"
demo: ""
article: ""

featured: true
order: 1
category: "ai"
---

## 프로젝트 배경

회사 내에서 ChatGPT, Claude, Gemini 등 다양한 AI 서비스를 개별적으로 사용하다 보니 컨텍스트 공유가 안 되고, 각 서비스별로 따로 결제해야 하는 비효율이 발생했습니다. 이를 해결하기 위해 슬랙 하나로 모든 AI 모델에 접근할 수 있는 통합 허브를 개발했습니다.

## 핵심 기능

- **멀티 모델 지원**: GPT-4, Claude 3, Gemini Pro 간 실시간 전환
- **컨텍스트 유지**: Redis 기반 대화 히스토리 관리로 모델 전환 시에도 맥락 유지
- **에이전트 워크플로우**: LangGraph를 활용한 복잡한 추론 및 도구 사용 지원
- **플러그인 시스템**: 웹 크롤링, 검색, 코드 실행 등 기능 손쉽게 확장

## 기술적 도전

### 1. 모델별 응답 포맷 통일

각 AI 모델의 응답 형식이 달라서 일관된 UX를 제공하기 어려웠습니다.

**해결**: Adapter 패턴을 적용하여 각 모델의 응답을 공통 인터페이스로 변환하는 레이어를 구현했습니다. 스트리밍 응답도 일관되게 처리할 수 있게 되었습니다.

### 2. Rate Limiting 및 비용 관리

여러 사용자가 동시에 요청할 때 API rate limit에 걸리거나 비용이 급증하는 문제가 있었습니다.

**해결**: Token bucket 알고리즘 기반 rate limiter를 구현하고, 사용자별/채널별 일일 토큰 한도를 설정했습니다. Redis를 활용해 분산 환경에서도 정확한 제한이 가능합니다.

### 3. 긴 대화의 컨텍스트 윈도우 관리

대화가 길어지면 모델의 컨텍스트 윈도우를 초과하는 문제가 발생했습니다.

**해결**: 대화 요약 파이프라인을 구축하여 오래된 메시지를 자동으로 요약하고, 중요도 기반으로 컨텍스트를 선별적으로 유지합니다.

## 아키텍처

```
Slack Event → Bolt SDK → Router → Model Adapter → AI Provider
                           ↓
                     Plugin Manager
                           ↓
                   (Search, Web, Code)
```

## 배운 점

- LangGraph의 그래프 기반 워크플로우 설계가 복잡한 에이전트 로직을 관리하는 데 매우 효과적
- 슬랙 API의 3초 응답 제한을 우회하기 위한 비동기 처리 패턴 습득
- 멀티 테넌트 환경에서의 격리와 리소스 관리 경험
