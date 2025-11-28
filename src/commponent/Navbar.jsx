import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logotekno.JPEG";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const gameCategories = [
    { name: "Action", path: "/actionlist" },
    { name: "Shooting", path: "/shootinglist" },
    { name: "Sports", path: "/sportlist" },
    { name: "Fighting", path: "/fightinglist" },
    { name: "Racing", path: "/racinglist" },
    { name: "Horror", path: "/horrorlist" },
  ];

  // 🚀 LOGIC SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          w-full bg-white shadow-md fixed top-0 left-0 z-50
          transition-transform duration-500
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between md:justify-center py-4 px-6 relative">
          <img src={logo} alt="Logo" className="w-14 md:absolute md:left-6" />
          <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="cursor-pointer hover:text-red-500"
            >
              Home
            </Link>

            <a href="/#about" className="cursor-pointer hover:text-red-500">
              About
            </a>

            <li
              className="cursor-pointer hover:text-red-500 flex items-center"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Game List
            </li>
          </ul>
          <button
            className="md:hidden absolute right-6 text-2xl"
            onClick={() => setOpenSidebar(true)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`overflow-hidden bg-gray-100 shadow-inner border-t transition-all duration-500 hidden md:block
            ${
              openDropdown
                ? "max-h-[400px] opacity-100 py-6"
                : "max-h-0 opacity-0 py-0"
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 w-full">
              <div className="flex items-center flex-[2]">
                <input
                  type="text"
                  placeholder="Search Game..."
                  className="w-full px-4 py-3 border rounded outline-none"
                />
                <button className="px-4 py-3 m-2 bg-black text-white flex items-center justify-center">
                  <FaSearch />
                </button>
              </div>
              <div className="flex items-center gap-4 flex-[3] flex-wrap">
                {gameCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    className="px-6 py-3 bg-white border rounded-md shadow-sm cursor-pointer hover:bg-red-300"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-[100] p-6 transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between mb-10">
          <img src={logo} alt="Logo" className="w-16" />
          <FaTimes
            className="text-3xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        <ul className="space-y-6 text-lg">
          <li>
            <Link to="/" onClick={() => setOpenSidebar(false)}>
              Home
            </Link>
          </li>

          <li>
            <a href="/#about" onClick={() => setOpenSidebar(false)}>
              About
            </a>
          </li>
          <li
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenSidebarDropdown(!openSidebarDropdown)}
          >
            Game List
            <FaChevronDown
              className={`transition-transform ${
                openSidebarDropdown ? "rotate-180" : ""
              }`}
            />
          </li>
          <ul
            className={`ml-4 mt-2 space-y-3 text-base overflow-hidden transition-all
              ${openSidebarDropdown ? "max-h-96" : "max-h-0"}
            `}
          >
            {gameCategories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={cat.path}
                  onClick={() => {
                    setOpenSidebar(false);
                    setOpenSidebarDropdown(false);
                  }}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
