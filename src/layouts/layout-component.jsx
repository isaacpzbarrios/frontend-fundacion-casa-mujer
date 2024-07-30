import Footer from "../components/footer-component";
import Header from "../components/header-component";
import "./../styles/layout.css"
const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="main-content">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
