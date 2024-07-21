import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownNav from "./navbar/DropdownNav";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const burgerClick = () => {
    if (navbarOpen) {
      setNavbarOpen(false);
    } else {
      setNavbarOpen(true);
    }
  };

  return (
    <nav className="bg-orange-500 text-white">
      <div className="sm:flex max-w-7xl mx-auto">
        <div className="flex">
        <Link className="h-10 block" to="">
          <img
            className="h-full"
            alt="AuctionSense logo"
            src="/images/LogoHeading.png"
          ></img>
        </Link>
        <button
          className="sm:hidden ml-auto items-center px-2"
          onClick={burgerClick}
        >
          &#9776;
        </button>
        </div>
        <div
          className={
            "w-full sm:flex justify-between " +
            (navbarOpen ? "" : "hidden")
          }
        >
          <div className="sm:flex sm:pl-5">
            <DropdownNav />
            <Link className="block hover:bg-orange-400 px-5 py-2 sm:px-5 sm:py-2" to="">
              Populair
            </Link>
            <Link className="block hover:bg-orange-400 px-5 py-2 sm:px-5 sm:py-2" to="">
              New
            </Link>
          </div>
          <div className="sm:py-2">
            <input
              className="hidden lg:flex outline-none bg-white border border-gray-500 w-80 px-2 text-gray-400"
              placeholder="Search..."
            ></input>
          </div>
          <div className="sm:flex">
            <Link className="block hover:bg-orange-400 px-5 py-2 sm:px-5 sm:py-2" to="">
              Shoppingcart
            </Link>
            <Link className="block hover:bg-orange-400 px-5 py-2 sm:px-5 sm:py-2" to="">
              Message
            </Link>
            <Link className="block hover:bg-orange-400 px-5 py-2 sm:px-5 sm:py-2" to="">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
