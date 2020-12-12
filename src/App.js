import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main_Nav from './Components/Home/Main_Nav'
import TopNav from './Components/Home/TopNav'
import Footer from './Components/Home/Footer'
import Carousel from './Components/Home/Carousel'
import AboutApp from './Components/Home/About/AboutApp'

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Main_Nav />
        <Switch>
          <Route path='/' exact component={Carousel}></Route>
          <Route exact path="/Aboutme" component={AboutApp}></Route>
        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
