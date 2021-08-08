import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              <span data-feather="home" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product" activeClassName="active">
              <span data-feather="shopping-cart" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category" activeClassName="active">
              <span data-feather="shopping-cart" />
              Category
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
