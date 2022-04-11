
import Footer from './Footer/Footer'
import Header from './Header/Header'


const Layout = (props) => {
  return (
    <div className="page-wrapper">
      <div className="preloader" style={{ display: "none" }} />
      <Header />
     
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout