import styles from './RestaurantCategoryFilter.module.css';
import Filter from '../UI/Filter';
import { CATEGORIES } from '../../data/restaurantsData';

function RestaurantCategoryFilter({ setSelectedCategory }) {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <section className={styles.restaurantFilterContainer}>
      <Filter
        label="음식점 카테고리 필터"
        options={CATEGORIES}
        onChange={handleCategoryChange}
      />
    </section>

  );
}

export default RestaurantCategoryFilter;
