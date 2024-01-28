import Header from "../components/header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
