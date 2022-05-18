import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Socials } from "./pages/Socials";
import { Welcome } from "./pages/Welcome";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  if (darkMode === true) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

  function toggleDarkMode(){
    setDarkMode((prev) => !prev)
  }

  return (
    <div >
      <ParallaxProvider >
      <Navbar></Navbar>
      <DarkModeToggle toggle={toggleDarkMode}></DarkModeToggle>
      <Welcome></Welcome>

      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full dark:hidden"
      version="1.1"
      viewBox="0 0 960 200"
    >
      <path fill="#fff" d="M0 0H960V200H0z"></path>
      <path
        strokeLinecap="round"
        d="M0 75l17.8-2.8c17.9-2.9 53.5-8.5 89-7.2 35.5 1.3 70.9 9.7 106.4 17.2S284.3 96.3 320 93.5c35.7-2.8 71.3-15.2 106.8-21.2s70.9-5.6 106.4-3.3 71.1 6.7 106.8 19 71.3 32.7 106.8 37.5c35.5 4.8 70.9-5.8 106.4-18s71.1-25.8 89-32.7L960 68v133H0z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 920 200"
      className="w-full hidden dark:block"
    >
      <path fill="#fff" d="M0 0H920V200H0z"></path>
      <path
        fill="#67e8f9"
        d="M0 93l21.8-9.2C43.7 74.7 87.3 56.3 131.2 52c43.8-4.3 87.8 5.3 131.6 10.5 43.9 5.2 87.5 5.8 131.4 2C438 60.7 482 52.3 525.8 56c43.9 3.7 87.5 19.3 131.4 28.2C701 93 745 95 788.8 85.8c43.9-9.1 87.5-29.5 109.4-39.6L920 36v165H0z"
      ></path>
      <path
        fill="#50d7ec"
        d="M0 95l21.8-1.5C43.7 92 87.3 89 131.2 85.7c43.8-3.4 87.8-7 131.6-2 43.9 5 87.5 18.6 131.4 21.5C438 108 482 100 525.8 92.3c43.9-7.6 87.5-15 131.4-14.5 43.8.5 87.8 8.9 131.6 12.2 43.9 3.3 87.5 1.7 109.4.8L920 90v111H0z"
      ></path>
      <path
        fill="#35c7e0"
        d="M0 133l21.8-4.2c21.9-4.1 65.5-12.5 109.4-14.8 43.8-2.3 87.8 1.3 131.6 7 43.9 5.7 87.5 13.3 131.4 13.3 43.8 0 87.8-7.6 131.6-14 43.9-6.3 87.5-11.3 131.4-9.6 43.8 1.6 87.8 10 131.6 16 43.9 6 87.5 9.6 109.4 11.5L920 140v61H0z"
      ></path>
      <path
        fill="#06b6d4"
        d="M0 172l21.8-1.5c21.9-1.5 65.5-4.5 109.4-7.2 43.8-2.6 87.8-5 131.6-3.1 43.9 1.8 87.5 7.8 131.4 9 43.8 1.1 87.8-2.5 131.6-7.5 43.9-5 87.5-11.4 131.4-10.7 43.8.7 87.8 8.3 131.6 10.2 43.9 1.8 87.5-2.2 109.4-4.2l21.8-2v46H0z"
      ></path>
    </svg>
    


      <AboutMe></AboutMe>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      version="1.1"
      viewBox="0 0 960 200"
    >
      <path d="M0 0H960V200H0z"></path>
      <path
        fill="#fff"
        strokeLinecap="round"
        d="M0 141l17.8-13.2c17.9-13.1 53.5-39.5 89-49s70.9-2.1 106.4 11C248.7 103 284.3 122 320 117.3c35.7-4.6 71.3-33 106.8-35.1C462.3 80 497.7 104 533.2 107S604.3 92 640 82.7c35.7-9.4 71.3-10 106.8-.5s70.9 29.1 106.4 39c35.5 9.8 71.1 9.8 89 9.8H960v70H0z"
      ></path>
    </svg>
    <Projects></Projects>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      version="1.1"
      viewBox="0 0 960 200"
    >
      <path fill="#fff" d="M0 0H960V200H0z"></path>
      <path
        strokeLinecap="round"
        d="M0 116l17.8-8c17.9-8 53.5-24 89-29s70.9 1 106.4.2c35.5-.9 71.1-8.5 106.8-14.5s71.3-10.4 106.8-9c35.5 1.3 70.9 8.3 106.4 22.6 35.5 14.4 71.1 36 106.8 36.4 35.7.3 71.3-20.7 106.8-30.7s70.9-9 106.4 1.5 71.1 30.5 89 40.5l17.8 10v65H0z"
      ></path>
    </svg>
      <Skills></Skills>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full bg-black"
      version="1.1"
      viewBox="0 0 960 200"
    >
      <path
        fill="#fff"
        strokeLinecap="round"
        d="M0 110l17.8-7.5c17.9-7.5 53.5-22.5 89-31.3 35.5-8.9 70.9-11.5 106.4-3.4 35.5 8.2 71.1 27.2 106.8 35 35.7 7.9 71.3 4.5 106.8-5.1C462.3 88 497.7 72 533.2 74.8c35.5 2.9 71.1 24.5 106.8 34.2 35.7 9.7 71.3 7.3 106.8 2.3s70.9-12.6 106.4-12.1 71.1 9.1 89 13.5L960 117v84H0z"
      ></path>
    </svg>
      <Socials></Socials>
      </ParallaxProvider>
    </div>
  );
}

export default App;
