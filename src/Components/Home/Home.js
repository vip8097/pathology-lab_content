import Layout from '../../Layouts/Layout'
import Sidebar from '../../Layouts/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
          {/* <!-- Sidebar  --> */}
          <Sidebar />
          {/* <!-- end sidebar --> */}
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
                          <i className="fa fa-medkit yellow_color" />
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
                          <i className="fa fa-money blue1_color" />
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">123.50</p>
                          <p className="head_couter">Today's Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-stethoscope green_color" />
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">1,805</p>
                          <p className="head_couter">Today's Patients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-money red_color" />
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">54</p>
                          <p className="head_couter">Last 7 day's Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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

                <div className="row column2 graph margin_bottom_30">
                  <div className="col-md-l2 col-lg-12">
                    <div className="white_shd full">
                      <div className="full graph_head">
                        <div className="heading1 margin_0">
                          <h2>Calendar</h2>
                        </div>
                      </div>
                      <div className="full progress_bar_inner">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="full">
                              <div className="ui calendar" id="example14" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end dashboard inner */}
          </div>
        </div>
      </div>
      < Layout/>
    </>
  );
};

export default Home;
