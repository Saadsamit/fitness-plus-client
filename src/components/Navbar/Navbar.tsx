import { IoIosFitness } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Slider from "../ui/Slider";
import { FaBars } from "react-icons/fa";
import { SheetClose } from "../ui/sheet";
import MyCart from "../MyCart/MyCart";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/products",
      name: "products",
    },
    {
      path: "/ProductManagement",
      name: "product management",
    },
    {
      path: "/cart",
      name: "cart",
    },
  ];
  const linkElement = links.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        className={`block py-2 px-2 hover:text-[#758694] hover:bg-[#FFF8F3] rounded text-[#405D72] capitalize`}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="mb-[93px]">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link to="/" className="flex items-center flex-col">
            <IoIosFitness className="size-10 text-[#405D72]" />
            <span className="self-center text-[#405D72] text-xl font-semibold whitespace-nowrap dark:text-white">
              Fitless Plus
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <MyCart />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <Slider
                name={<FaBars />}
                header={
                  <Link to="/" className="flex items-center flex-col">
                    <IoIosFitness className="size-10 text-[#405D72]" />
                    <span className="self-center text-[#405D72] text-xl font-semibold whitespace-nowrap dark:text-white">
                      Fitless Plus
                    </span>
                  </Link>
                }
                variant="outline"
              >
                <ul
                  id="sideBar"
                  className="navbar text-center p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-2"
                >
                  {links.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        className={`block py-2 px-3 hover:text-[#758694] hover:bg-[#FFF8F3] rounded text-[#405D72] capitalize`}
                      >
                        <SheetClose className="w-full">{item.name}</SheetClose>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Slider>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex navbar flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {linkElement}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
