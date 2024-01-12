import "./App.css";
import LandingPage from "./assets/components/landingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n"; // Import the i18n configuration
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <LandingPage />
    </ParallaxProvider>
  );
}

export default App;
