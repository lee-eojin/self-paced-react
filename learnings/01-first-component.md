---
chapter: 01-first-component
last-updated: 2026-04-19
sessions: 1
---

# 컴포넌트 첫걸음

---

## 세션 1 — 2026-04-19

### 배운 것

- HTML을 JSX로 변환할 때 `class` → `className`, `for` → `htmlFor` 로 바꿔야 한다. JS 예약어와 충돌하기 때문.
- JSX는 하나의 루트 태그로 감싸야 한다. `<>...</>` (Fragment) 사용.
- HTML 주석 `<!-- -->` 은 JSX에서 안 되고 `{/* */}` 로 써야 한다.
- `<img>`, `<input>` 같은 태그는 JSX에서 반드시 `/>` 로 닫아야 한다.
- React 컴포넌트는 JSX를 return하는 함수. `export default function Header() { return (...) }` 형태.
- 컴포넌트를 파일로 분리하고 import해서 `<Header />` 처럼 쓸 수 있다.
- TypeScript 설정: `tsconfig.json` + `@types/react` 설치. `.tsx` 확장자 사용.
- `cols="30"` 같은 숫자 속성은 TypeScript에서 `{30}` 으로 써야 한다. `""` 는 문자열, `{}` 는 JS 표현식.

### 헷갈렸던 부분

- `Cmd+H` 가 VSCode 일괄 치환인 줄 알았는데 맥에서는 창 숨기기였음. 실제 단축키는 `Cmd+Option+F`.
- `main.jsx` 가 이미 있어서 `<main>` 컴포넌트 이름을 `Main` 으로 못 씀 → `RestaurantList` 로 지음.
- `<body>` 를 JSX return 안에 그대로 쓰면 레이아웃이 깨짐. React 앱은 이미 `<body>` 안에서 실행되기 때문.
- props가 뭔지 몰랐음 → 컴포넌트에 넘기는 값. HTML 속성처럼 `<Header title="점심 뭐 먹지" />` 형태.

### 코드로 보면

```tsx
// 컴포넌트 기본 구조
export default function Header() {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
    </header>
  );
}

// App에서 조합
import Header from "./Header";
import RestaurantList from "./RestaurantList";
import Aside from "./Aside";

function App() {
  return (
    <>
      <Header />
      <RestaurantList />
      <Aside />
    </>
  );
}
```

### 참고 링크

- https://ko.react.dev/learn/your-first-component

---
