import { BsMoon, BsMoonFill } from "react-icons/bs";

import { darkMode } from "../features/country/countrySlice";

import { useCustomDispatch, useCustomSelector } from "../hooks/redux";

const Navbar = () => {
  const { isDark } = useCustomSelector((store) => store.country);
  const dispatch = useCustomDispatch();

  return (
    <nav className="nav-container">
      <h2>Where in the world?</h2>
      <div className="mode" onClick={() => dispatch(darkMode())}>
        {isDark ? (
          <BsMoonFill className="moon-logo" />
        ) : (
          <BsMoon className="moon-logo" />
        )}

        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
