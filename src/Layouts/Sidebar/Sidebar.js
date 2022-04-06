import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar  */}
      <nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html">
                <img
                  className="logo_icon img-responsive"
                  src="/assets/images/logo/logo_icon.png"
                  alt="#"
                />
              </a>
            </div>
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img">
                <img
                  className="img-responsive"
                  src="/assets/images/layout_img/user_img.jpg"
                  alt="#"
                />
              </div>
              <div className="user_info">
                <h6>John David</h6>
                <p>
                  <span className="online_animation" /> Online
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar_blog_2">
          <h4>General</h4>
          <ul className="list-unstyled components">
            <li className="active">
              <li>
                <Link to="/">
                  <i className="fa fa-dashboard yellow_color" />{' '}
                  <span>Dashboard</span>
                </Link>
              </li>
            </li>

            <li>
              <a
                href="#element"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-user-md yellow_color" />{' '}
                <span>Patient</span>
              </a>
              <ul className="collapse list-unstyled" id="element">
                <li>
                  <a href="#">
                    &gt; <span>Add New Patient</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    &gt; <span>Patient List</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#test"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-medkit yellow_color" /> <span>Test</span>
              </a>
              <ul className="collapse list-unstyled" id="test">
                <li>
                  <a href="#">
                    &gt; <span>Add New Test</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    &gt; <span>Patient Test</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#report"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-flag-o yellow_color" /> <span>Reports</span>
              </a>
              <ul className="collapse list-unstyled" id="report">
                <li>
                  <a href="#">
                    &gt; <span>Report 1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    &gt; <span>Report 2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    &gt; <span>Report 3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    &gt; <span>Report 4</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/login">
                <i className="fa fa-sign-in yellow_color" /> <span>Login</span>
              </Link>
            </li>

            <li>
              <Link to="/setting">
                <i className="fa fa-cog yellow_color" /> <span>Settings</span>
              </Link>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-sign-out yellow_color" />{' '}
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* end sidebar */}
    </>
  );
};

export default Sidebar;
