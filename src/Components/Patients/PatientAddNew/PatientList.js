import { Link, useNavigate, } from 'react-router-dom';
import Layout from '../../../Layouts/Layout';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';

import { toast } from 'react-toastify';

import './list.css';
import PatientDataService from "../../Services/PatientService";
import { useEffect, useState } from 'react';

const PatientList = () => {
  const navigate = useNavigate();


  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, [])

  const getPatientIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    const route = '/patients/' + id
    navigate(route);

  }
  const editPatientIdHandler = (id) => {
    console.log("The ID of document to be view: ", id);
    const route = '/patientlist/' + id;
    navigate(route);
  }

  const getPatients = async () => {
    const data = await PatientDataService.getAllPatients()
    console.log(data.docs);
    setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const deleteHandler = async (id) => {
    await PatientDataService.deletePatient(id);
    getPatients();
    toast.success(<p>delete successfully!</p>, {
      position: "top-center",
      theme: ""
    })
  }

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
                  <div className="col-md-12">
                    <div className="white_shd full margin_bottom_30">

                      <div className="table_section padding_infor_info">
                        <div className="table-responsive-sm">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Serial No.</th>
                                <th>Patient's Name</th>
                                <th>Contact No.</th>
                                <th>Address</th>
                                <th>Whatapp No.</th>
                                <th>Action</th>

                              </tr>
                            </thead>
                            <tbody>
                              {patients.map((doc, index) => {
                                return (
                                  <tr key={doc.id}>
                                    <td>{index + 1}</td>
                                    <td>{doc.patientName}</td>
                                    <td>{doc.contactNumber}</td>
                                    <td>{doc.address}</td>
                                    <td>{doc.whatappNumber}</td>
                                    <td>
                                      <button
                                        variant="secondary"
                                        className="editButton"
                                        onClick={(e) => { e.preventDefault(); getPatientIdHandler(doc.id) }}
                                      >
                                        <spam class="fa fa-edit "></spam> <span>Edit</span>

                                      </button>
                                      <button

                                        className="editButton"
                                        onClick={(e) => { e.preventDefault(); editPatientIdHandler(doc.id) }}
                                      >
                                        <spam class="fa fa-eye "></spam> <span>View</span>

                                      </button>


                                      <button

                                        className="deleteButton"
                                        onClick={(e) => { e.preventDefault(); deleteHandler(doc.id) }}
                                      >


                                        <spam class="fa fa-trash "></spam> <span>Delete</span>
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>


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

export default PatientList;
