const DashboardPage = () => {
  return (
    <div className="container min-w-full">
      <div className=" flex bg-[#F68533] p-2 pt-4">
        <div className=" w-3/12">
          <img src="/logo.png" alt="" width="200" height="200" />
        </div>
        <div className=" w-6/12">
          <ul className=" flex justify-center gap-4 font">
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

export default DashboardPage;
