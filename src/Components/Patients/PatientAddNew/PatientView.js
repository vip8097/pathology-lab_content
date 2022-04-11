import { Link, useParams, } from 'react-router-dom';
import Layout from '../../../Layouts/Layout';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';

import './list.css';
import PatientDataService from "../../Services/PatientService";
import { useEffect, useState } from 'react';

const PatientView = () => {

   // const [patients, setPatients] = useState([]);

   const [patientName, setPatientName] = useState("")
   const [contactNumber, setContactNumber] = useState("")
   const [address, setAddress] = useState("")
   const [whatappNumber, setWhatappNumber] = useState("")
   const { id } = useParams()

   const editHandler = async () => {
      // setMessage("");
      try {
         const docSnap = await PatientDataService.getPatient(id);
         console.log("the record is :", docSnap.data());

         setPatientName(docSnap.data().patientName);
         setContactNumber(docSnap.data().contactNumber);
         setAddress(docSnap.data().address);
         setWhatappNumber(docSnap.data().whatappNumber);
      } catch (err) {
         //   toast.error(err)
      }
   }
   useEffect(() => {
      console.log("The id here is : ", id);
      if (id !== undefined && id !== "") {
         editHandler();
      }
   }, [id])




   console.log('id', id)

   return (
      <>
         <div className="list">
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
                              <h2>Patient's Lists </h2>

                              <Link to="/patients" >
                                 <h2 className="link" >
                                    Add New Patient
                                 </h2>
                              </Link>
                           </div>

                           {/* <!-- table section --> */}
                           {/* <!-- row --> */}
                           <div className="row">
                              {/* <!-- invoice section --> */}
                              <div className="col-md-12">
                                 <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                       <div className="heading1 margin_0">
                                          <h2><i className="fa fa-file-text-o"></i> View</h2>
                                       </div>
                                    </div>



                                    <div className="full padding_infor_info">
                                       <div className="table_row">
                                          <div className="table-responsive">
                                             <table className="table table-striped">
                                                <thead>
                                                   <tr>

                                                      <th>Patient's Name</th>
                                                      <th>Contact No.</th>
                                                      <th>Address</th>
                                                      <th>Whatapp No.</th>
                                                   </tr>
                                                </thead>
                                                <tbody>


                                                   <tr >

                                                      <td>{patientName}</td>
                                                      <td>{contactNumber}</td>
                                                      <td>{address}</td>
                                                      <td>{whatappNumber}</td>
                                                   </tr>


                                                </tbody>
                                             </table>
                                           
                                            
                                           
                                          </div>
                                          <Link to="/patientlist" >
                                 <h2 className="linkback" >
                                  Back To PatientList
                                 </h2>
                              </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- row --> */}


                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Layout />
      </>
   );
};

export default PatientView;
