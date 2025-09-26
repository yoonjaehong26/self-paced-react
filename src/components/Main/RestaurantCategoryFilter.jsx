import styles from './RestaurantCategoryFilter.module.css';
import Filter from '../UI/filter';

function RestaurantCategoryFilter({ restaurants, setfilteredRestaurants }) {
  const CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];
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
      <Filter
        label="음식점 카테고리 필터"
        options={CATEGORIES}
        onChange={handleFilterChange}
      />
    </section>

  );
}

export default RestaurantCategoryFilter;
