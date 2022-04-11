import Layout from '../../../Layouts/Layout';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';

import PatientDataService from "../../Services/PatientService";

import {  toast } from 'react-toastify';


const PatientAddNew = ({ setPatientId, title }) => {
  // const [data, setData] = useState({});

  const [patientName, setPatientName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [address, setAddress] = useState("")
  const [whatappNumber, setWhatappNumber] = useState("")

  const { id } = useParams();

  // const [message, setMessage] = useState({ error: false, msg: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setMessage("")

    if (patientName === "" || contactNumber === "" || address === "" || whatappNumber === "") {
      // setMessage({ error: true, msg: "All fields are mandatory!" });
      toast.error(<p>All fields are mandatory!</p>, {
        position: "top-center",
        theme: ""
      })
      return;
    }
    const newPatient = {
      patientName,
      contactNumber,
      address,
      whatappNumber,
      timeStamp: serverTimestamp(),
    }
    console.log(newPatient)

    try {
      if (id !== undefined && id !== "") {
        await PatientDataService.updatePatient(id, newPatient);
        setPatientId("")
        // setMessage({ error: false, msg: "Updated successfully!" });
        toast.success(<p>Updated successfully!</p>, {
          position: "top-center",
          theme: ""
        })
        navigate(-1)
      } else {
        await PatientDataService.addNewPatients(newPatient)
        // setMessage({ error: false, msg: "New Patient added successfully!" });
        toast.success(<p>New Patients added successfully!</p>, {
          position: "top-center",
          theme: ""
        })
        navigate(-1)
      }
    
    } catch (err) {
      // setMessage({ error: true, msg: err.message });
      toast.error(err)
    }

    setPatientName("");
    setContactNumber("");
    setAddress("");
    setWhatappNumber("")
  }

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
      // setMessage({ error: true, msg: err.message });
      toast.error(err)
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
                  <h2>{title}</h2>
                </div>

              </div>
            </div>


            {/* <!-- row --> */}


            <div className="center verticle_center">
              <div className="login_section">

                <div className="login_form">




                  <form onSubmit={handleSubmit}>
                    <fieldset>
                      <div className="field">
                        <label className="label_field">Patient Name</label>
                        <input
                          type="text"
                          id="patientName"
                          name="patientName"
                          value={patientName}
                          placeholder="Patient Name"

                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>
                      <div className="field">
                        <label className="label_field">Contact Number</label>
                        <input
                         type="tel"
                         maxlength="10"
                          id="contactNumber"
                          name="patientName"
                          value={contactNumber}
                          placeholder="Contact Number"
                          maxLength="10"
                          onChange={(e) => setContactNumber(e.target.value)}
                        />
                      </div>
                      <div className="field">
                        <label className="label_field">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={address}
                          placeholder="Address"

                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="field">
                        <label className="label_field">Whatapp Number</label>
                        <input
                        
                          id="whatappNumber"
                          name="whatappNumber"
                          value={whatappNumber}
                          placeholder="Whatapp Number"
                          type="tel"
                          maxlength="10"
                          onChange={(e) => setWhatappNumber(e.target.value)}
                        />
                      </div>

                      <div className="field margin_0">
                        <label className="label_field hidden">
                          hidden label
                        </label>
                        <button type="Submit" className="main_bt">
                          Add / Update
                        </button>
                      </div>
                    </fieldset>

                   
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end dashboard inner --> */}
        </div>
      </div>

      <Layout />
    </>
  );
};

export default PatientAddNew;
