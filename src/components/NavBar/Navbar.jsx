import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const [isHovered, setIsHovered] = useState(false);
  const [isElementsHovered, setIsElementsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleDropdownMouseEnter = (item) => {
    setOpenDropdown(item);
    if (item === "elements") {
      setIsElementsHovered(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
    if (openDropdown === "elements") {
      setIsElementsHovered(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuHeight(isMenuOpen ? "0px" : "400px");
  };

  const dropdownItems = {
    home: ["Overview", "Updates", "Gallery"],
    destinations: ["Europe", "Asia", "Africa"],
    tours: ["Guided Tours", "Adventure Tours", "City Tours"],
    pages: ["About Us", "Contact", "FAQ"],
    blog: ["Latest Posts", "Travel Tips", "Inspiration"],
  };

  return (
    <>
      <div className="w-[96%] lg:w-[90%] mx-auto bg-white relative z-50">
        <nav className="flex justify-between items-center py-7 px-5 bg-white relative">
          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/k5gvskw6y/Holiday-Home/ROAM_white.png?updatedAt=1723217180745"
              alt="Logo"
              width={83}
            />
          </div>
          <div className="md:hidden flex items-center">
            {isMenuOpen ? (
              <AiOutlineClose
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={handleMenuToggle}
              />
            ) : (
              <AiOutlineMenu
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={handleMenuToggle}
              />
            )}
          </div>

          <ul className="hidden md:flex items-center space-x-8 relative">
            {["home", "destinations", "tours", "pages", "blog", "elements"].map(
              (item) => (
                <li
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleDropdownMouseEnter(item)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a
                    href="#"
                    className="text-gray-900 font-[Montserrat] font-semibold hover:text-orange-600 flex items-center"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                  {dropdownItems[item] && (
                    <ul
                      className={`absolute left-0 pt-2 w-44 bg-white text-gray-900 overflow-hidden transition-all ${
                        openDropdown === item
                          ? "max-h-60 duration-1000"
                          : "max-h-0 duration-300"
                      }`}
                    >
                      <span
                        className={`ml-16 ${
                          openDropdown === item ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▲
                      </span>
                      {dropdownItems[item].map((subItem, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100">
                          <a href="#" className="text-gray-700">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>

          <div
            className="md:hidden absolute z-50 top-full left-0 w-full bg-white overflow-hidden transition-all duration-1000 ease-in-out"
            style={{ maxHeight: menuHeight }}
          >
            <ul className="flex flex-col text-sm space-y-4 p-4 ">
              {[
                "Home",
                "Destinations",
                "Tours",
                "Pages",
                "Blog",
                "Elements",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 font-[Montserrat] font-bold hover:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div
        className={`bg-gray-900 w-full z-40 left-0 menu4-container font-[Montserrat] absolute mx-auto p-6 transform transition-all duration-500 ease-in-out ${
          isElementsHovered
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="mx-auto pt-4 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((column) => (
            <div key={column} className="pl-4 border-r border-orange-500">
              <h3 className="text-lg text-orange-500 mb-2">Column {column}</h3>
              <ul className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-600 hover:underline">
                      Item {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
