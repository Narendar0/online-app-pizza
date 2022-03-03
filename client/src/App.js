import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";



function App() {
  return (
    <>
    <BrowserRouter>
        <TopBar />
        <NavBar/>
        <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen}  />
        <Route path="/cart" component={CartScreen} exact />
        </Switch>

        </BrowserRouter>
    </>
  );
}

export default App;
