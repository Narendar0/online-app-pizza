import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";



function App() {
  return (
    <>
    <BrowserRouter>
        <TopBar />
        <NavBar/>
        <Switch>
        <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Registe} exact/>
        <Route path="/" component={HomeScreen}  exact/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact}/>
        <Route path="/policy" component={Policy}/>
        <Route path="/cart" component={CartScreen}/>
        </Switch>

        </BrowserRouter>
    </>
  );
}

export default App;
