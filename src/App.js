import './App.css';
import Home from './Components/Home/Home';
import Layout from './Layouts/Layout';
import { Routes, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
