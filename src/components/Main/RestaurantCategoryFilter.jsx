import styles from './RestaurantCategoryFilter.module.css';

function RestaurantCategoryFilter({ restaurants, setfilteredRestaurants }) {
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === '전체') {
      setfilteredRestaurants(restaurants);
    } else {
      const SelectedRestaurants = restaurants.filter(
        (restaurant) => restaurant.category === selectedCategory,
      );
      setfilteredRestaurants(SelectedRestaurants);
    }
  };

  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        name="category"
        id="category-filter"
        className={styles.restaurantFilter}
        aria-label="음식점 카테고리 필터"
        onChange={handleFilterChange}
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
  );
}

export default RestaurantCategoryFilter;
