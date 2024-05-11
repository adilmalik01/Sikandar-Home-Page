import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex px-20 justify-between h-[10vh] items-center">
        <div className="text-4xl font-bold"> Sikandar Tahir</div>

        <ul className="flex  justify-between gap-12">
          <li className="text-xl"><a href="">Home</a></li>
          <li className="text-xl">About</li>
          <li className="text-xl">Contact</li>
        </ul>

        <button className="bg-gray-400 hover:bg-gray-700 p-2 transition-all duration-700 rounded-md">
          Download More
        </button>
      </div>
    </>
  );
};

export default Navbar;
