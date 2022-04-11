import Layout from '../../Layouts/Layout'
import Sidebar from '../../Layouts/Sidebar/Sidebar'

const Settings = () => {
  return (
      <>
       {/* <!-- Sidebar  --> */}
       <Sidebar />
          {/* <!-- end sidebar --> */}
    {/* right content */}
    <div id="content">
     
      {/* dashboard inner */}
      <div className="midde_cont">
        <div className="container-fluid">
          <div className="row column_title">
            <div className="col-md-12">
              <div className="page_title">
                <h2>Settings</h2>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row column4 graph">
            <div className="col-md-12">
              <div className="white_shd full margin_bottom_30">
                <div className="full graph_head">
                  <div className="heading1 margin_0">
                    <h2>Message</h2>
                  </div>
                </div>
                <div className="full progress_bar_inner">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="msg_section">
                        <div className="msg_list_main">
                          <ul className="msg_list">
                            <li>
                              <span>
                                <img
                                  src="/assets/images/layout_img/msg2.png"
                                  className="img-responsive"
                                  alt="#"
                                />
                              </span>
                              <span>
                                <span className="name_user">John Smith</span>
                                <span className="msg_user">
                                  Sed ut perspiciatis unde omnis.
                                </span>
                                <span className="time_ago">12 min ago</span>
                              </span>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/assets/images/layout_img/msg3.png"
                                  className="img-responsive"
                                  alt="#"
                                />
                              </span>
                              <span>
                                <span className="name_user">John Smith</span>
                                <span className="msg_user">
                                  On the other hand, we denounce.
                                </span>
                                <span className="time_ago">12 min ago</span>
                              </span>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/assets/images/layout_img/msg2.png"
                                  className="img-responsive"
                                  alt="#"
                                />
                              </span>
                              <span>
                                <span className="name_user">John Smith</span>
                                <span className="msg_user">
                                  Sed ut perspiciatis unde omnis.
                                </span>
                                <span className="time_ago">12 min ago</span>
                              </span>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/assets/images/layout_img/msg3.png"
                                  className="img-responsive"
                                  alt="#"
                                />
                              </span>
                              <span>
                                <span className="name_user">John Smith</span>
                                <span className="msg_user">
                                  On the other hand, we denounce.
                                </span>
                                <span className="time_ago">12 min ago</span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

          </div>
          {/* end row */}
        
        </div>
       
      </div>
      {/* end dashboard inner */}
    </div>

    < Layout/>
      </>
  )
}

export default Settings