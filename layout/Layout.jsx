import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ ...props }) => (
  <div className="min-h-screen flex flex-col justify-between">
    <Navbar />
    <main>{props.children}</main>
    <Footer />
  </div>
)
export default Layout
