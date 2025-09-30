import { useState } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';
import restaurants from './data/restaurantsData';

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  return (
    <div>
      <header>
        <HomeHeader />
      </header>

      <main>
        <RestaurantCategoryFilter
          restaurants={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>

      <article>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </article>
    </div>
  );
}
export default App;
