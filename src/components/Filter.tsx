import { useCustomDispatch } from "../hooks/redux";
import { setFilter, clearFilters } from "../features/country/countrySlice";
const Filter = () => {
  const dispatch = useCustomDispatch();

  const handleFilter = (e: any) => {
    dispatch(clearFilters());
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filters-container-filter">
      <select
        className="filter-select"
        name="filter"
        id="filter"
        onChange={handleFilter}
        /* styles={colourStyles} */
      >
        <option value="" defaultValue={""}>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
