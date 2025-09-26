import styles from './RestrauantList.module.css';
import RestaurantItem from './RestaurantItem';

function RestrauantList() {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ul>
    </section>
  );
}

export default RestrauantList;
