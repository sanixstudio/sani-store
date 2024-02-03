import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
