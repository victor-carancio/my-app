import CountryDetailType from "../interfaces/countryDetailType";
import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

interface Props {
  countryDetail: CountryDetailType;
}

const CountryDetail = ({ countryDetail }: Props) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flag,
    borders,
  } = countryDetail;

  return (
    <div className="country-detail-container">
      <div className="info-container">
        <div>
          <Link to="/rest-countries-api" className="btn-link">
            <button className="btn-back">
              <CgArrowLongLeft className="arrow-icon" />
              Back
            </button>
          </Link>
          <img src={flag} alt={name} className="country-flag" />
        </div>
        <div className="country-info">
          <section className="first-column">
            <h2 className="detail-title">{name}</h2>
            <p>
              Native name: <span className="detail-span">{nativeName}</span>
            </p>
            <p>
              Population:{" "}
              <span className="detail-span">
                {population.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              Region: <span className="detail-span">{region}</span>
            </p>
            <p>
              Sub Region: <span className="detail-span">{subregion}</span>
            </p>
            <p>
              Capital: <span className="detail-span">{capital}</span>
            </p>
          </section>

          <section className="second-column">
            <p>
              Top Level Domain: <span className="detail-span">{tld}</span>
            </p>
            <p>
              Currencies:{" "}
              {currencies.map((item: any, index) => {
                if (currencies.length - 1 == index) {
                  return (
                    <span key={index} className="detail-span">
                      {item}
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="detail-span">
                      {item},{" "}
                    </span>
                  );
                }
              })}
            </p>
            <p>
              Languages:{" "}
              {languages.map((item, index) => {
                if (languages.length - 1 == index) {
                  return (
                    <span key={index} className="detail-span">
                      {item}
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="detail-span">
                      {item},{" "}
                    </span>
                  );
                }
              })}
            </p>
          </section>
          <section className="borders-container">
            <h3>Borders countries:</h3>
            <div className="span-container">
              {borders ? (
                borders.map((item, index) => {
                  if (item) {
                    return (
                      <Link
                        key={index}
                        to={`/rest-countries-api/country/${item}`}
                        className="border-link"
                      >
                        <div className="border-span">{item}</div>
                      </Link>
                    );
                  }
                })
              ) : (
                <div className="border-span">None</div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
