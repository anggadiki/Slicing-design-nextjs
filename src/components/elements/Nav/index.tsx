const Nav = () => {
  return (
    <div className="px-2">
      <div className=" flex p-2 pt-4 mx-auto">
        <div className=" w-3/12 flex justify-start pl-5">
          <img src="/logo.png" alt="" className=" w-21 h-7" />
        </div>
        <div className=" w-6/12">
          <ul className=" flex justify-center gap-5 font text-xl text-white">
            <li>Home</li>
            <li>Chilcare Juice</li>
            <li>Order</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className=" w-3/12 flex justify-end">
          <img src="/account.svg" alt=" account" width="55" height="55" />
          <img src="/cart-plus.svg" alt=" account" width="55" height="55" />
          <img src="/magnify.svg" alt=" account" width="55" height="55" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
