import './App.css';
import Commencer from "./pages/Commencer";
import Home from "./components/Home";
import Choix1 from "./components/Choix1";
import Choix1a from "./components/Choix1a";
import Choix1b from "./components/Choix1b";
import Choix2 from "./components/Choix2";
import Choix2a from "./components/Choix2a";
import Choix2b from "./components/Choix2b";
import Serpentard from "./components/Serpentard";
import Gryffondor from "./components/Gryffondor";
import Poufsouffle from "./components/Poufsouffle";
import Serdaigle from "./components/Serdaigle";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="flex-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commencer" component={Commencer} />
          <Route exact path="/choix1" component={Choix1} />
          <Route exact path="/choix1a" component={Choix1a} />
          <Route exact path="/choix1b" component={Choix1b} />
          <Route exact path="/choix2" component={Choix2} />
          <Route exact path="/choix2a" component={Choix2a} />
          <Route exact path="/choix2b" component={Choix2b} />
          <Route exact path="/serpentard" component={Serpentard} />
          <Route exact path="/gryffondor" component={Gryffondor} />
          <Route exact path="/poufsouffle" component={Poufsouffle} />
          <Route exact path="/serdaigle" component={Serdaigle} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
