// Third-party imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Global imports
import Header from "./components/Header/Header";
import Step1 from "./Pages/Step1/Step1";
import Step2 from "./Pages/Step2/Step2";
import Step3 from "./Pages/Step3/Step3";
import Result from "./Pages/Result/Result";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/step3" component={Step3} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
