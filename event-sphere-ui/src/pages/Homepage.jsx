import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl text-red-300">Homepage</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Homepage;
