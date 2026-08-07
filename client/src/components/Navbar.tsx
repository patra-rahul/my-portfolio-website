import logo from "../assets/owl.jpg";

const Navbar = () => {
  return (
    <div className="p-3 m-4 bg-panel bg-opacity-0.5 rounded-xl">
      <ul className="flex justify-between items-center text-4xl text-color-panel text-primary-text">
        <li>
          <img src={logo} alt="inaccessible" className="h-12 rounded-full object-contain" />
        </li>
        <li>Work</li>
        <li>About</li>
        <li>Github</li>
        <li>Activity</li>
        <li className="bg-white px-4 py-2 rounded-lg text-bg">
          <a href="mailto:contractrahulpatra@gmail.com">
            contactrahulpatra@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
