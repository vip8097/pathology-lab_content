import React from 'react'

const Login = () => {
  return (
      <>
      <div className="full_container">
         <div className="container">
            <div className="center verticle_center full_height">
               <div className="login_section">
                  <div className="logo_login">
                     <div className="center">
                        <img width="210" src="/assets/images/logo/logo.png" alt="#" />
                     </div>
                  </div>
                  <div className="login_form">
                     <form>
                        <fieldset>
                           <div className="field">
                              <label className="label_field">User</label>
                              <input type="text" name="text" placeholder="User" />
                           </div>
                           <div className="field">
                              <label className="label_field">Password</label>
                              <input type="password" name="password" placeholder="Password" />
                           </div>
                           <div className="field">
                              <label className="label_field hidden">hidden label</label>
                             
                              <a className="forgot" href="">Forgotten Password?</a>
                           </div>
                           <div className="field margin_0">
                              <label className="label_field hidden">hidden label</label>
                              <button className="main_bt">Log In</button>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      </>
  )
}

export default Login