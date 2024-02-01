import { Toaster } from "react-hot-toast";
import "./App.css";
import Layout from "./layout/Layout";
import Landing from "./pages/Landing";

function App() {
  return (
    <Layout>
      <>
        <Toaster />
        <Landing />
      </>
    </Layout>
  );
}

export default App;
