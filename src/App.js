import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Components/landing";
import Dashboard from "./Components/dashboard";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
