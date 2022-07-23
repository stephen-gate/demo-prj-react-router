import {NavLink,Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      
      <Link to={"/home"} className={classes.nav_logo_btn} >
      <div>HOME</div>
      </Link>

      <nav className={classes.nav}>
        <ul>
          
        <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/links">
              Links
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
