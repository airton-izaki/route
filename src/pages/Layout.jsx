import {Outlet, Link} from "react-router-dom";
import icon from "../image/icon.png"

const Layout = () =>
{
  return(
    <>
      <div className="layout-div-ext">
      <div>
          <img className="icon" src= {icon} alt="" />
      </div>
      <div className="layout-div-nav">
      <nav className="layout-nav">
        <ul className="layout-ul">
          <li className="layout-li">
            <Link className = "layout-link" to="/">Home</Link>
          </li>
          <li className = "layout-li">
            <Link className = "layout-link" to="/blog">Blogs</Link>
          </li>
          <li className = "layout-li">
            <Link className = "layout-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      </div>
      <Outlet />
    </>
    )
  };
export default Layout;