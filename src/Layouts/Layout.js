
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = (props) => {
  return (
    <div className="page-wrapper">
      <div className="preloader" style={{ display: "none" }} />
      <Header />
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout