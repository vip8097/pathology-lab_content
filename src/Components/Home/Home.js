

const Home = () => {
   return (
      <>
       
            <div className="full_container">
               <div className="inner_container">
                 
                  <div id="content">
                    
                     
                    
                     <div className="midde_cont">
                        <div className="container-fluid">
                           <div className="row column_title">
                              <div className="col-md-12">
                                 <div className="page_title">
                                    <h2>Dashboard</h2>
                                 </div>
                              </div>
                           </div>
                           <div className="row column1">
                              <div className="col-md-6 col-lg-3">
                                 <div className="full counter_section margin_bottom_30">
                                    <div className="couter_icon">
                                       <div>
                                          <i className="fa fa-user yellow_color" />
                                       </div>
                                    </div>
                                    <div className="counter_no">
                                       <div>
                                          <p className="total_no">2500</p>
                                          <p className="head_couter">Today Test</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full counter_section margin_bottom_30">
                                    <div className="couter_icon">
                                       <div>
                                          <i className="fa fa-clock-o blue1_color" />
                                       </div>
                                    </div>
                                    <div className="counter_no">
                                       <div>
                                          <p className="total_no">123.50</p>
                                          <p className="head_couter">Today Revenue</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full counter_section margin_bottom_30">
                                    <div className="couter_icon">
                                       <div>
                                          <i className="fa fa-cloud-download green_color" />
                                       </div>
                                    </div>
                                    <div className="counter_no">
                                       <div>
                                          <p className="total_no">1,805</p>
                                          <p className="head_couter">Today Patients</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full counter_section margin_bottom_30">
                                    <div className="couter_icon">
                                       <div>
                                          <i className="fa fa-comments-o red_color" />
                                       </div>
                                    </div>
                                    <div className="counter_no">
                                       <div>
                                          <p className="total_no">54</p>
                                          <p className="head_couter">Last 7 days Revenue</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="row column1 social_media_section">
                              <div className="col-md-6 col-lg-3">
                                 <div className="full socile_icons fb margin_bottom_30">
                                    <div className="social_icon">
                                       <i className="fa fa-facebook" />
                                    </div>
                                    <div className="social_cont">
                                       <ul>
                                          <li>
                                             <span>
                                                <strong>35k</strong>
                                             </span>
                                             <span>Friends</span>
                                          </li>
                                          <li>
                                             <span>
                                                <strong>128</strong>
                                             </span>
                                             <span>Feeds</span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full socile_icons tw margin_bottom_30">
                                    <div className="social_icon">
                                       <i className="fa fa-twitter" />
                                    </div>
                                    <div className="social_cont">
                                       <ul>
                                          <li>
                                             <span>
                                                <strong>584k</strong>
                                             </span>
                                             <span>Followers</span>
                                          </li>
                                          <li>
                                             <span>
                                                <strong>978</strong>
                                             </span>
                                             <span>Tweets</span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full socile_icons linked margin_bottom_30">
                                    <div className="social_icon">
                                       <i className="fa fa-linkedin" />
                                    </div>
                                    <div className="social_cont">
                                       <ul>
                                          <li>
                                             <span>
                                                <strong>758+</strong>
                                             </span>
                                             <span>Contacts</span>
                                          </li>
                                          <li>
                                             <span>
                                                <strong>365</strong>
                                             </span>
                                             <span>Feeds</span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                 <div className="full socile_icons google_p margin_bottom_30">
                                    <div className="social_icon">
                                       <i className="fa fa-google-plus" />
                                    </div>
                                    <div className="social_cont">
                                       <ul>
                                          <li>
                                             <span>
                                                <strong>450</strong>
                                             </span>
                                             <span>Followers</span>
                                          </li>
                                          <li>
                                             <span>
                                                <strong>57</strong>
                                             </span>
                                             <span>Circles</span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                           {/* graph */}
                           <div className="row column2 graph margin_bottom_30">
                              <div className="col-md-l2 col-lg-12">
                                 <div className="white_shd full">
                                    <div className="full graph_head">
                                       <div className="heading1 margin_0">
                                          <h2>Extra Area Chart</h2>
                                       </div>
                                    </div>
                                    <div className="full graph_revenue">
                                       <div className="row">
                                          <div className="col-md-12">
                                             <div className="content">
                                                <div className="area_chart">
                                                   <canvas height={120} id="canvas" />
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* end graph */}
                         
                          
                        </div>
                      
                       
                     </div>
                     {/* end dashboard inner */}
                  </div>
               </div>
            </div>


      </>
   )
}

export default Home