export interface Restaurant {
  id: string;
  name: string;
  description: string;
  category: string;
}

export default function RestaurantList({
  restaurants,
  onChangeCategory,
  onClickRestaurant,
}: {
  restaurants: Restaurant[];
  onChangeCategory: (category: string) => void;
  onClickRestaurant: (restaurant: Restaurant) => void;
}) {
  return (
    <main>
      <section className="restaurant-filter-container">
        <select
          onChange={(e) => onChangeCategory(e.target.value)}
          name="category"
          id="category-filter"
          className="restaurant-filter"
          aria-label="음식점 카테고리 필터"
        >
          <option value="전체">전체</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
          <option value="아시안">아시안</option>
          <option value="기타">기타</option>
        </select>
      </section>

      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {restaurants.map((restaurant) => (
            <li onClick={() => onClickRestaurant(restaurant)} key={restaurant.id} className="restaurant">
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
                <p className="restaurant__description text-body">{restaurant.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
