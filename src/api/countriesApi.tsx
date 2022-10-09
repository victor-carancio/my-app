const url = "https://restcountries.com/v3.1/";
const urlAll = "https://restcountries.com/v3.1/all";
const urlName = "https://restcountries.com/v3.1/name/";
const urlFilter = "https://restcountries.com/v3.1/region/";

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
        .slice(0, 50);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFilterCountries = async (filter: string) => {
  try {
    const response = await fetch(`${urlFilter}${filter}`);
    const countryData = await response.json();
    /* console.log(countryData); */
    const { countriesData } = countryData;
    if (countryData) {
      return countryData.map(
        ({ name, population, region, capital, flags }: any) => {
          return {
            name: name.common,
            population,
            region,
            capital,
            flag: flags.svg,
          };
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCountryDetail = async (id: string) => {
  try {
    const response = await fetch(`${urlName}${id}?fullText=true`);
    const countryData = await response.json();

    const responseAll = await fetch(`${urlAll}`);
    const countryBorders = await responseAll.json();

    const findBorder = (border: string) => {
      const borderDetail = countryBorders.find(({ cca3 }: any) => {
        if (cca3 == border) {
          return cca3;
        } else {
          return "";
        }
      });
      return borderDetail ? borderDetail.name.common : "";
    };

    if (countryData) {
      return countryData.map(
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
            borders: borders
              ? Object.values(borders).map((item: any) => {
                  return findBorder(item);
                })
              : "",
            flag: flags.svg,
          };
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
