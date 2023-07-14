import React from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("click");
  };

  return (
    <header className="bg-gray-200">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        <div className="py-2">logo placeholder</div>
        {/* hamburger */}
        <nav className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-white focus:outline-none focus:bg-white focus:text-gray-500 transition duration-150 ease-in-out"
          >
            {showMenu ? <></> : <AiOutlineMenu />}
          </button>
        </nav>
        {showMenu ? (
          <nav className="fixed inset-0 w-full h-screen bg-white/60 flex flex-col justify-center items-center z-20">
            <button
              onClick={toggleMenu}
              type="button"
              className="absolute top-0 end-0 inline-flex items-center justify-center p-2 mx-3 my-4 rounded-md text-gray-400 outline-4 outline-gray-900 hover:text-gray-500 hover:bg-white focus:outline-1 focus:bg-white focus:text-gray-500 transition duration-150 ease-in-out"
            >
              aaaa
              {/* <GrClose /> */}
            </button>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
          </nav>
        ) : (
          <></>
        )}
        {/* duże menu */}
        <nav className="hidden md:flex justify-end">
          <a className="inline-flex items-center justify-center px-4 py-2 cursor-pointer text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Coßtamcoß
          </a>
          <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 cursor-pointer text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Inspiracje
          </a>
          <button
            className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-gray-300 focus:bg-transparent hover:bg-transparent focus:outline hover:outline focus:outline-2 hover:outline-2 outline-gray-900"
            onClick={() => null}
          >
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
