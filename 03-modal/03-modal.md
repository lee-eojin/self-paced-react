# 03. 모달 UI 구현하기: side-effect(feat. event handler)

<img src="../images/03-side-effects-event-handler.jpg" width=720 />    

## 🎯 요구 사항
- `RestaurantList` 의 아이템을 클릭하면, 클릭한 아이템의 정보를 보여주는 모달이 뜨도록 변경해 주세요. '확인' 버튼을 클릭하거나 모달 뒤의 backdrop을 클릭하면 모달이 닫혀야 합니다.
  - (작은 단계로 구현해보기 1) 아이템을 클릭하면 정해진 텍스트를 그대로 보여주는 모달을 열고 닫습니다.
  - (작은 단계로 구현해보기 2) 클릭한 아이템의 정보를 모달에 내려줄 수 있도록 개선합니다.

### 구현 결과 예시
```javascript
// App.jsx
{isModalOpen && <RestaurantDetailModal {/** 적절한 props */}/>}

// 문제 의의제기 -> 내가 생각했을때는 이거 isModalOpen 하는거 아닌거같다 -> 이걸로 하면 타입단언을 해야함
// selectedResturants만 하는게 맞다고 본다....
// 그림이 별로였다고 한 이유: 보통 모달을 isModalOpen으로 설계하는거에는 문제가없다? 일반적으로 자연스럽다
// 문제 의의제기....!!
// {isModalOpen && selectedRestaurant && ( <RestaurantDetailModal 이게 완벽하다.
```    

## ✅ 키워드
- event handler (feat. side effect)
- conditional rendering
- lifting state up

## 🧙‍♀️ 진행 가이드
- 권장 진행 시간: 1시간 내
- 권장 시간 이후에는 요구 사항 별로 아래 브랜치를 참고해 보세요 
  - [guide/03-1](https://github.com/woowacourse/self-paced-react/commit/1625a83eb22e94ed8199bef007cff7e1d965e134) 
  - [guide/03-2](https://github.com/woowacourse/self-paced-react/commit/3096c71c6ebfe74bfdff8889cbe3ca622ef5af41)

## 🔗 참고 문서
- [Thinking in React](https://react.dev/learn/thinking-in-react)의 Step5     
- [Responding to Events](https://react.dev/learn/responding-to-events)
