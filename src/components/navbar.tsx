import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useGlobalContext } from "../contexts/context";

const Navbar = () => {
  const { isDark, setIsDark } = useGlobalContext();

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="nav-container">
      <h2>Where in the world?</h2>
      <div className="mode" onClick={() => changeTheme()}>
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
