import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className=" pt-5 ">
        <div className="flex-1-0-auto min-h-screen container">
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
