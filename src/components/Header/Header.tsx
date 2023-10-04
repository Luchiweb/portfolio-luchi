import { Link } from "react-router-dom";
import { ButtonDarkMode } from "../ThemeButton/ThemeButton";

function Header() {
  return (
    <div className="container py-4">
      <a href="" className="text-2xl font-semibold">
        Lu
      </a>
      <nav className="flex items-center gap-4">
        <ul className="flex gap-8 text-white font-semibold">
          <li>
            <Link
              to={"#"}
              className="text-bg-color hover:text-main-color dark:text-white dark:hover:text-main-color"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="text-bg-color hover:text-main-color dark:text-white dark:hover:text-main-color"
            >
              Stack
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="text-bg-color hover:text-main-color dark:text-white dark:hover:text-main-color"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="text-bg-color hover:text-main-color dark:text-white dark:hover:text-main-color"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ButtonDarkMode />
      </nav>
    </div>
  );
}

export default Header;
