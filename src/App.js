import React, { Component } from 'react';
import Navbar from "./components/layouts/navbar"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Provider from "./context"
import Index from "./components/layouts/index"
import Lyrics from "./components/tracks/Lyrics"
class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
     <React.Fragment>
      <Navbar/>
       <Switch>
    <Route exact path ="/" component={Index}/>
    <Route exact path="/lyrics/track/:id" component={Lyrics}/>
       </Switch>
       </React.Fragment>
      </Router>
      </Provider>
    );
   
  }
}

export default App;
