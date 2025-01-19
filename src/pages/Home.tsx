import Search from "../components/search";
import Filter from "../components/Filter";
import CountryContainer from "../components/countryContainer";
const Home = () => {
  return (
    <section className="home-container">
      <div className="filters-container">
        <Search />
        <Filter />
      </div>
      <CountryContainer />
    </section>
  );
};

export default Home;
