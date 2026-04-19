# Self-Paced React

## 🎯 이 학습 자료의 목표 경험
React를 사용해 자주 사용되는 UI들을 아주 기초적인 수준으로 구현해봅니다.    
이 과정에서 React의 설계 원칙을 고려하며 개발하는 연습의 첫 단계를 경험해봅니다.
- JavaScript 기반의 React 프로젝트를 직접 실행할 수 있다. 
- React에서 컴포넌트를 선언하고 사용할 수 있다. 
- 아래와 같은 UI를 가장 기초적인 수준에서 구현할 수 있다. (유효성 검사, 그 외 UX 대응 등 모두 X)
  - 목록 UI
  - 모달 UI
  - 폼 UI 

### ❌ 다루지 않는 것
- TypeScript (Claude Code가 약간 다룸)
- RSC(React Server Component)
- 테스트 도구
  - Storybook
  - RTL(React Testing Library)
- 라우팅, 상태 관리 등을 위한 서드파티 라이브러리
- React의 깊이있는 동작 원리
- React 컴포넌트 구현 패턴
- Context API
- Ref (Claude Code가 약간 다룸)
- useState/useEffect 이외의 hook, custom hook (Claude Code가 약간 다룸)

### ✅ 다루는 것
- 'React의 설계 원칙에 맞는' 코드를 작성하기 위한 학습에서 참고할 만한 자료
- JSX
- useState
- useEffect

## 🧙‍♀️ 진행 가이드
이 저장소의 미션들은 '잘' 구현하기나 '깊이 이해하기'가 목표가 아닙니다.      
'React를 사용해본 적 없는 상태'에서 '사용해본 상태'가 되는 것이 목표이고, 그걸 위해 최소한으로 필요한 만큼만 공식 문서를 발췌해서 학습 자료로 활용해보았다면 충분합니다.                   

React를 활용하는 코드를 직접 작성해보면서 대략적인 감을 잡을 수 있다면 충분하니,      
각 단계의 권장 학습 시간을 참고해 전체 사이클을 빠른 시간 내에 완료하는 것을 목표로 삼아 보세요.       
만약 권장 시간 내에 구현해내기가 어렵다면, 예시 브랜치의 코드를 참고해서 동작시켜보아도 됩니다.     
시작 전 워밍업으로 Quick Start 정도를 해보았다는 가정 하에 모든 단계를 구현해서 동작시켜보는 데까지 최대 `약 6~7시간`을 권장 학습 시간으로 제안합니다.

## Claude Code 학습 하네스

이 저장소는 Claude Code 슬래시 커맨드와 규칙 파일로 구성된 학습 하네스를 포함하고 있습니다.
AI 어시스턴트가 학습 도우미 역할을 할 수 있도록 동작 방식을 미리 정의해둔 것입니다.

### 사용 방법

Claude Code에서 아래 커맨드를 입력하면 학습을 시작할 수 있습니다.

```
/react-study   학습 시작 — 챕터 선택 후 단계별 안내
/save          현재 세션 내용을 learnings/ 폴더에 저장
```

### Claude Code가 심화로 다루는것
- TypeScript 기초 (심화)
- useRef (심화)
- useReducer, custom hook (심화)

### 하네스 구조

```
.claude/
├── settings.json         권한 설정 — 허용된 도구/명령어 목록
├── rules/
│   └── teaching-style.md 항상 활성화되는 안내 규칙 (i+1 입력 가설 기반)
└── commands/
    ├── react-study.md    /react-study 커맨드 정의
    └── save.md           /save 커맨드 정의
learnings/                /save로 저장된 챕터별 학습 노트
```

- `settings.json`: 이 프로젝트에서 Claude가 실행할 수 있는 도구와 명령어의 범위를 제한합니다.
- `rules/`: 커맨드 호출 여부와 관계없이 항상 적용되는 행동 규칙입니다. `paths:` 필드로 어떤 파일을 다룰 때 이 규칙을 적용할지 범위를 지정합니다.
- `commands/`: 슬래시 커맨드 파일입니다. `allowed-tools:` 필드로 각 커맨드가 사용할 수 있는 도구를 제한합니다.

### 설계 원칙

학습 안내는 스티븐 크라센의 **입력 가설(i+1)** 을 따릅니다.
학습자의 현재 수준보다 한 단계 높은 개념만, 한 번에 하나씩 소개합니다.
챕터 기본 과정을 마치면 우테코 레벨2 수준의 심화 주제(TypeScript, custom hook, useReducer 등)로 이어갈 수 있습니다.

---

## 🦮 목차
### [00. Introduction](./00-introduction/README.md)
### [01. 컴포넌트 선언하고 사용하기: Component 기본 구조와 JSX](01-first-component/01-first-component.md)
### [02. 목록 UI 구현하기: Props와 State](02-rendering-lists/02-rendering-lists.md)
### [03. 모달 UI 구현하기: side-effect(feat. event handler)](03-modal/03-modal.md)
### [04. 폼 UI 구현하기: controlled vs uncontrolled](04-form/04-form.md) 
### [05. API 연동하기: side-effect(feat. effects)](05-effects/05-effects.md)
### [06. References](./06-references/README.md)
