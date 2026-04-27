---
chapter: 03-modal
last-updated: 2026-04-27
sessions: 1
---

# 모달 UI

---

## 세션 1 — 2026-04-27 (진행 중)

### 배운 것

조건부 렌더링: `{isModalOpen && <컴포넌트 />}` — `isModalOpen`이 false면 컴포넌트가 DOM에 아예 안 생긴다.

`&&` 연산자로 조건부 렌더링을 할 때, JSX 안에서 `{}` 로 감싸야 한다.

모달 열고 닫기: `isModalOpen` state를 App에서 관리하고, 열기는 `RestaurantList`의 `<li> onClick`에서, 닫기는 `RestaurantDetailModal`의 닫기 버튼과 backdrop `onClick`에서 `setIsModalOpen(false)` 호출.

### 헷갈렸던 부분

`{}` 가 JSX 안에서 되는지 — JSX에서 `{}` 는 JS 표현식을 쓰는 신호라서 가능하다.

### 코드로 보면

```tsx
// App.tsx
const [isModalOpen, setIsModalOpen] = useState(false);

{isModalOpen && (
  <RestaurantDetailModal onClose={() => setIsModalOpen(false)} />
)}

<RestaurantList
  onClickRestaurant={() => setIsModalOpen(true)}
/>
```

```tsx
// RestaurantDetailModal.tsx
export default function RestaurantDetailModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}
```

### 아직 모르는 것

클릭한 음식점 정보를 모달에 넘기는 것 (세션 진행 중).

### 참고 링크

- https://ko.react.dev/learn/responding-to-events

---
