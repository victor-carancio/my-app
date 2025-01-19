const url = "https://restcountries.com/v3.1/";
const urlAll = "https://restcountries.com/v3.1/all";
const urlName = "https://restcountries.com/v3.1/name/";
const urlFilter = "https://restcountries.com/v3.1/region/";
const codeSearch = "https://restcountries.com/v3.1/alpha?codes=";

export const getCountries = async (search: string) => {
  try {
    const response = await fetch(`${url}${search ? "name/" + search : "all"}`);
    const countryData = await response.json();
    /* console.log(countryData); */
    const { countriesData } = countryData;
    if (countryData) {
      return countryData
        .map(({ name, population, region, capital, flags }: any) => {
          return {
            name: name.common,
            population,
            region,
            capital,
            flag: flags.svg,
          };
        })
        .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
        .slice(0, 50);
    }
  } catch (error) {
    // console.log(error);
    return [];
  }
};

export const getFilterCountries = async (filter: string) => {
  try {
    const response = await fetch(`${urlFilter}${filter}`);
    const countryData = await response.json();
    /* console.log(countryData); */
    const { countriesData } = countryData;
    if (countryData) {
      return countryData
        .map(({ name, population, region, capital, flags }: any) => {
          return {
            name: name.common,
            population,
            region,
            capital,
            flag: flags.svg,
          };
        })
        .sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCountryDetail = async (id: string) => {
  try {
    let countryData = [];
    const response = await fetch(`${urlName}${id}?fullText=true`);
    const data = await response.json();

    // console.log(countryData);
    if (data.status === 404) {
      const secondSearch = await fetch(`${codeSearch}${id}`);
      const secondSearchData = await secondSearch.json();
      countryData = [...secondSearchData];
    } else {
      countryData = [...data];
    }

    if (countryData.length > 0) {
      return countryData
        .map(
          ({
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            flags,
            borders,
          }: any) => {
            return {
              name: name.common,
              nativeName: name.official,
              population,
              region,
              subregion,
              capital,
              tld,
              languages: Object.values(languages),
              currencies: Object.keys(currencies).map((item: string) => {
                return currencies[item].name;
              }),
              borders: borders,
              // borders: borders
              // ? Object.values(borders).map((item: any) => {
              //     return findBorder(item);
              //   })
              // :
              // "",
              flag: flags.svg,
            };
          }
        )
        .sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
    }
  } catch (error) {
    console.log(error);
  }
};
