import { Route, Switch } from 'react-router';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { Home, Cart, WishList } from './pages'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/wishlist"><WishList /></Route>
      </Switch>
    </div>
  );
}

export default App;
