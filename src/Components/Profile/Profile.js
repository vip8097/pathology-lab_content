import Layout from '../../Layouts/Layout'
import Sidebar from '../../Layouts/Sidebar/Sidebar'


const Profile = () => {
  return (
     <>
         {/* <!-- Sidebar  --> */}
         <Sidebar />
          {/* <!-- end sidebar --> */}
        <div id="content">
            
               {/* <!-- dashboard inner --> */}
               <div className="midde_cont">
                  <div className="container-fluid">
                     <div className="row column_title">
                        <div className="col-md-12">
                           <div className="page_title">
                              <h2>Profile</h2>
                           </div>
                        </div>
                     </div>
                     {/* <!-- row --> */}
                     <div className="row column1">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                           <div className="white_shd full margin_bottom_30">
                              <div className="full graph_head">
                                 <div className="heading1 margin_0">
                                    <h2>User profile</h2>
                                 </div>
                              </div>
                              <div className="full price_table padding_infor_info">
                                 <div className="row">
                                    {/* <!-- user profile section --> 

                                    <!-- profile image --> */}
                                    <div className="col-lg-12">
                                       <div className="full dis_flex center_text">
                                          <div className="profile_img"><img width="180" className="rounded-circle" src="/assets/images/layout_img/user_img.jpg" alt="#" /></div>
                                          <div className="profile_contant">
                                             <div className="contact_inner">
                                                <h3>John Smith</h3>
                                                <p><strong>About: </strong>Frontend Developer</p>
                                                <ul className="list-unstyled">
                                                   <li><i className="fa fa-envelope-o"></i> : test@gmail.com</li>
                                                   <li><i className="fa fa-phone"></i> : 987 654 3210</li>
                                                </ul>
                                             </div>
                                           
                                          </div>
                                       </div>
                                      
                                      
                                       {/* <!-- end user profile section --> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-2"></div>
                        </div>
                        {/* <!-- end row --> */}
                     </div>
                    
                  </div>
                  {/* <!-- end dashboard inner --> */}
               </div>
            </div>
      
            < Layout/>
      </>
  )
}

export default Profile