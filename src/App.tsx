import { Theme } from "@radix-ui/themes";
import "./App.css";
import Layout from "./layout/Layout";

import Landing from "./pages/Landing";

function App() {
  return (
    <Theme accentColor="crimson">
      <Layout>
        <Landing />
      </Layout>
    </Theme>
  );
}

export default App;
