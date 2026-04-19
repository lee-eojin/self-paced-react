import "./App.css";
import Header from "./Header.tsx";
import "./style.css";
import RestaurantList from "./RestaurantList.tsx";
import RestaurantDetailModal from "./RestaurantDetailModal.tsx";
import AddRestaurantModal from "./AddRestaurantModal.tsx";

function App() {
  return (
    <>
      <Header />
      <RestaurantList />
      <RestaurantDetailModal />
      <AddRestaurantModal />
    </>
  );
}

export default App;
