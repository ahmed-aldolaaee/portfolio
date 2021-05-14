import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import js from 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/skills" component={SkillsScreen}></Route>
        <Route path="/projects" component={ProjectsScreen}></Route>
        <Route path="/about" component={AboutScreen}></Route>
        <Route path="/contact" component={ContactScreen}></Route>
      </div>
      <script src={js}></script>
    </Router>
  );
}

export default App;
