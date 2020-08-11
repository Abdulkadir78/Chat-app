import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Room from "./components/Room";
import Global from "./components/Global";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Room} />
        <Route path="/global" component={Global} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
