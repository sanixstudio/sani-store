import { Route } from "react-router";
import { Theme } from "@radix-ui/themes";

import "./App.css";
import Header from "./components/Header/Header";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <Theme>
      <div className="App">
        <Header />
        <Route exact path="/">
          <NewHome />
        </Route>
        {/* <Route path="/cart"><Cart /></Route>
     <Route path="/wishlist"><WishList /></Route>
     <Route path="/*"><Page404/></Route> */}
      </div>
    </Theme>
  );
}

export default App;
