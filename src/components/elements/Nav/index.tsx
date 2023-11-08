import { useState } from "react";

const Nav = () => {
  const [offCanvass, setOffCanvass] = useState(false);
  return (
    <div className="lg:px-2">
      <div
        className={`lg:hidden flex flex-row w-full bg-gradient-to-b from-[#F68533] transition-all to-gray-200 h-full fixed ${
          offCanvass ? `right-0` : `-right-full`
        }`}
      >
        <button
          className="w-4/12 flex justify-end px-10 py-5"
          onClick={() => setOffCanvass(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <ul className=" w-8/12 flex flex-col justify-start items-center font text-xl text-white py-5 px-10 space-y-8 ">
          <li>Home</li>
          <li>Chilcare Juice</li>
          <li>Order</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className=" flex p-2 pt-4 mx-auto">
        <div className=" w-3/12 flex justify-start pl-5">
          <img src="/logo.png" alt="" className=" md:w-21 md:h-7" />
        </div>
        <div className="lg:hidden w-9/12 flex justify-end px-5 transition-all">
          <button onClick={() => setOffCanvass(!offCanvass)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu text-white"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="lg:w-7/12 lg:flex sm:hidden lg:justify-center">
          <ul className=" flex justify-center gap-5 font text-xl text-white">
            <li>Home</li>
            <li>Chilcare Juice</li>
            <li>Order</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className=" w-3/12 lg:flex justify-end lg:w-2/12 lg:mx-auto sm:hidden">
          <img src="/account.svg" alt=" account" width="55" height="55" />
          <img src="/cart-plus.svg" alt=" account" width="55" height="55" />
          <img src="/magnify.svg" alt=" account" width="55" height="55" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
