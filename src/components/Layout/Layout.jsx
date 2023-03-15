import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className=" h-screen min-w-full p-5 ">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
