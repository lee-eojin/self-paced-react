---
chapter: 02-rendering-lists
last-updated: 2026-04-27
sessions: 1
---

# 리스트 렌더링

---

## 세션 1 — 2026-04-27

### 배운 것

props는 부모 컴포넌트가 자식에게 데이터를 넘기는 방법. 함수에 인자 넘기듯이 `<RestaurantList restaurants={restaurants} />` 형태로 쓴다.

state는 바뀌는 값을 기억하는 곳. `useState`로 만들고, state가 바뀌면 React가 자동으로 화면을 다시 그린다. `renderList()` 같은 걸 직접 호출할 필요가 없다.

배열을 화면에 그릴 때는 `.map()`을 쓰고, 각 항목에 `key`를 반드시 붙여야 한다.

### 헷갈렸던 부분

`restaurants={restaurants}` 에서 왼쪽은 props 이름, 오른쪽은 넘기는 값이라는 구분.

삼항 연산자 (`조건 ? 참 : 거짓`) 구조.

`=` (할당)과 `===` (비교) 차이 — `filter` 안에서 `=` 대신 `===`을 써야 함.

### 코드로 보면

```tsx
// App.tsx — state와 필터링
const [category, setCategory] = useState("전체");
const filteredRestaurants = category === "전체"
  ? restaurants
  : restaurants.filter((r) => r.category === category);

<RestaurantList
  restaurants={filteredRestaurants}
  onChangeCategory={setCategory}
/>
```

```tsx
// RestaurantList.tsx — props 받아서 렌더링
export default function RestaurantList({ restaurants, onChangeCategory }) {
  return (
    <select onChange={(e) => onChangeCategory(e.target.value)}>
      ...
    </select>
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
```

### 아직 모르는 것

없음.

### 참고 링크

- https://ko.react.dev/learn/passing-props-to-a-component
- https://ko.react.dev/learn/rendering-lists
- https://ko.react.dev/reference/react/useState

---
