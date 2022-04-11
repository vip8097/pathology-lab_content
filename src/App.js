import Home from './Components/Home/Home';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';
import Profile from './Components/Profile/Profile';
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import Logout from './Components/Logout/Logout';
import PatientAddNew from './Components/Patients/PatientAddNew/PatientAddNew';
import PatientList from './Components/Patients/PatientAddNew/PatientList'
import PatientView from './Components/Patients/PatientAddNew/PatientView';


const App = () => {
  const { currentUser } = useContext(AuthContext)

  const [patientId, setPatientId] = useState("");



  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };


  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />

            <Route path='logout' element={<RequireAuth><Logout /></RequireAuth>} />

            <Route path='patients' element={<RequireAuth><PatientAddNew id={patientId} setPatientId={setPatientId} title="Add New Patient" /></RequireAuth>}>
            </Route>
            <Route index path='patients/:id' element={<RequireAuth><PatientAddNew id={patientId} setPatientId={setPatientId} title="Add New Patient" /></RequireAuth>}>
            </Route>

            <Route path='patientlist' element={<RequireAuth><PatientList /></RequireAuth>} />
            <Route indec path='patientlist/:id' element={<RequireAuth><PatientView /></RequireAuth>} />


            <Route path='profile'>
              <Route index element={<RequireAuth><Profile /></RequireAuth>} />
            </Route>

            <Route path='setting'>
              <Route index element={<RequireAuth><Settings /></RequireAuth>} />
            </Route>

          </Route>

        </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App