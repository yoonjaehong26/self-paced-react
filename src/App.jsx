import styles from './App.module.css';
import HomeHeader from './components/Header/HomeHeader.jsx';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter.jsx';
import RestaurantList from './components/Main/RestaurantList.jsx';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal.jsx';
import AddRestaurantModal from './components/Aside/AddRestaurantModal.jsx';

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
