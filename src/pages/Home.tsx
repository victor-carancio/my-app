import Search from "../components/search";
import Filter from "../components/Filter";
import CountryContainer from "../components/countryContainer";
const Home = () => {
  return (
    <main className="home-container">
      <div className="filters-container">
        <Search />
        <Filter />
      </div>
      <CountryContainer />
    </main>
  );
};

export default Home;
