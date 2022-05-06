import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Socials } from "./pages/Socials";
import { Welcome } from "./pages/Welcome";

function App() {

  return (
    <div>
      <ParallaxProvider >
      <Navbar></Navbar>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Socials></Socials>
      </ParallaxProvider>
    </div>
  );
}

export default App;
