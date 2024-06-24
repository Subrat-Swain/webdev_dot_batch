import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">

      <div className="flex flex-row justify-between">
        {/* img */}
        <NavLink to="/">
          <div>
            <img src=""/>
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart/>
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
