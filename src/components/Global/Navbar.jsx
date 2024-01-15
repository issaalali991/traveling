import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <nav className="h-25 rounded-t-lg flex justify-between items-center flex-grow bg-black px-4 py-4">
      <div className="flex items-center space-x-4 flex-grow">
        <div className="rounded-full bg-white w-12 h-12 overflow-hidden flex justify-center">
          <Link to="/">
          <img
            src="/src/assets/Pictures/BullyOneTest.jpg"
            alt="SharedTravelLogo"
          />
          </Link>
        </div>

        <ul className="flex items-center space-x-4 flex-grow">
          <Link to="/">
            <li className="basis-1/4 hover:text-orange-300 text-white font-oleo font-bold py-2 px-4">
              HOME
            </li>
          </Link>
          <Link to="/trip">
            <li className="basis-1/4  hover:text-yellow-300 text-white font-oleo font-bold py-2 px-4">
              TRIPS
            </li>
          </Link>
          <Link to="/about">
            <li className="basis-1/4  hover:text-yellow-300 text-white font-oleo font-bold py-2 px-4">
              ABOUT US
            </li>
          </Link>
          <Link to="/contact">
            <li className="basis-1/4  hover:text-yellow-300 text-white font-oleo font-bold py-2 px-4">
              CONTACT US
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex justify-end ">
        <Link to="/login">
          <li className="basis-1/4  hover:text-yellow-300 text-white font-oleo font-bold py-2 px-4">
            LOGIN
          </li>
        </Link>
        <Link to="/signup">
          <li className="basis-1/4  hover:text-yellow-300 text-white font-oleo font-bold py-2 px-4">
            SIGN UP
          </li>
        </Link>

        <form className="flex items-center">
          <input
            className="border-double border-2 border-white-500 rounded py-1 px-8 mr-4 text-sm"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <button
            className="bg-black text-white text-sm rounded-full border-solid border-2 border-white-500 py-1 px-1 hover:bg-gray-800 transition duration-300 font-semibold text-lg"
            onClick={handleSearchSubmit}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
