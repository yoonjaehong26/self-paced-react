import styles from './App.module.css';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <HomeHeader />
      </header>

      <main>
        <RestaurantCategoryFilter />
        <RestaurantList />
      </main>

      <article>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </article>
    </div>
  );
}
export default App;
