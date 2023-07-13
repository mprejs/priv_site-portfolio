// import React from 'react'

const Header = () => {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto flex py-3">
        <div className="flex-none">logo placeholder</div>
        <div className="flex-1 flex justify-end">
          <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 cursor-pointer text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Coßtamcoß
          </a>
          <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 cursor-pointer text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Inspiracje
          </a>
          <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 cursor-pointer text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Menu
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
