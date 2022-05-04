import { Navbar } from "./components/Navbar";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Socials } from "./pages/Socials";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Socials></Socials>
    </div>
  );
}

export default App;
