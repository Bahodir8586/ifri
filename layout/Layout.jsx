import Footer from './Footer'
import Header from './Header'

const Layout = ({ ...props }) => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)
export default Layout
