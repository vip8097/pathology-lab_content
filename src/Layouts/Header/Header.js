
import React from 'react'

const Header = () => {
  return (
   
    <>
  {/* topbar */}
  <div className="topbar">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="full">
        <button type="button" id="sidebarCollapse" className="sidebar_toggle">
          <i className="fa fa-bars" />
        </button>
        <div className="logo_section">
          <a href="/">
            <img
              className="img-responsive"
              src="/assets/images/logo/logo.png"
              alt="#"
            />
          </a>
        </div>
        <div className="right_topbar">
          <div className="icon_info">
           
            <ul className="user_profile_dd">
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    className="img-responsive rounded-circle"
                    src="/assets/images/layout_img/user_img.jpg"
                    alt="#"
                  />
                  <span className="name_user">John David</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="profile.html">
                    My Profile
                  </a>
                  <a className="dropdown-item" href="settings.html">
                    Settings
                  </a>
                 
                  <a className="dropdown-item" href="/">
                    <span>Log Out</span> <i className="fa fa-sign-out" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* end topbar */}
</>

    
   
  )
}

export default Header