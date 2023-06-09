import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-20 bg-[#FF6D60] container">
        <Link to="/">Event-Sphere</Link>
        <Link to="/login">Login</Link>
        <div className="mt-4 text-xl">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
