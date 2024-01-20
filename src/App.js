import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Program from "./components/Program";
import Reasons from "./components/Reasons";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
       <Router>
         <div className="home-container">
            <div className="header-heading">
              <h1 style={{ color: "#ffd700" }}>Limitless Fitness Club</h1>
            </div>
          </div>
            <Header />
      <Switch>
         <Route path="/mygymapp" exact component={ Hero } />
         <Route path="/" exact component={ Hero } />
         <Route path="/home" exact component={ Hero } />
         <Route path="/programs" exact component={ Program } />
         <Route path="/why-us" exact component={ Reasons} />
         {/* <Route path="/plans" exact component={ Plan} /> */}
         <Route path="/why-us" exact component={ Join} />
         <Route path="/testimoidals" exact component={ Testimonial} />



      {/* <Program />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join /> */}
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
