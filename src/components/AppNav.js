const { Link } = require('react-router-dom');

export const AppNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/orders">ORDERS</Link>
        </li>
      </ul>
    </nav>
  );
};
