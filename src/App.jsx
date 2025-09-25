import "./App.css";
import HomeHeader from "./components/Header/HomeHeader.jsx";
import RestaurantCategoryFilter from "./components/Main/RestaurantCategoryFilter.jsx";
import RestrauantList from "./components/Main/RestrauantList.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";

function App() {
  return (
    <>
      <header>
        <HomeHeader />
      </header>

      <main>
        <RestaurantCategoryFilter></RestaurantCategoryFilter>
        <RestrauantList></RestrauantList>
      </main>

      <article>
        <RestaurantDetailModal></RestaurantDetailModal>
      <AddRestaurantModal></AddRestaurantModal>
      </article>
    </>
  );
}

export default App;
