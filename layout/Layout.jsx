import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ ...props }) => (
  <div>
    <Navbar />
    <main>{props.children}</main>
    <Footer />
  </div>
)
export default Layout
