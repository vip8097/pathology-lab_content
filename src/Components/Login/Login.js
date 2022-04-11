import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   
   const { dispatch } = useContext(AuthContext)
   
   const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
         const user = userCredential.user;
         dispatch({type:"LOGIN", payload:user})
        navigate("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login">
                <div className="center">
                  <img
                    width="210"
                    src="/assets/images/logo/logo1.png"
                    alt="#"
                  />
                </div>
              </div>
              <div className="login_form">
                <form onSubmit={handleLogin}>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">UserId</label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="UserId"
                        required
                      />
                    </div>
                    <div className="field">
                      <label className="label_field">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="field">
                      <a className="forgot" href="#">
                        Forgotten Password?
                      </a>
                    </div>
                    <div className="field margin_0">
                      <label className="label_field hidden">hidden label</label>
                      <button type="submit" className="main_bt">
                        Log In
                      </button>
                      {error && <span style={{fontSize:"12px",color:"red",marginTop:"10px"}}>Wrong username or password!</span>}
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
