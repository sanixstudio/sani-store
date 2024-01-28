import { Theme } from "@radix-ui/themes";
import "./App.css";
import Layout from "./layout/Layout";

import Landing from "./pages/Landing";
import useGetDataFromSanity from "./hooks/getDataFromSanity";

function App() {
  const { products, isLoading, error } = useGetDataFromSanity();

  console.log(products, isLoading, error);

  return (
    <Theme accentColor="crimson">
      <Layout>
        <Landing />
      </Layout>
    </Theme>
  );
}

export default App;
