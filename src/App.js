import { About, Footer, Header, Main, Portfolio, Services } from "./components";
import ToggleThemeButton from "./components/ToggleThemeButton/ToggleThemeButton";
import "./App.css";
import Button from "./components/Button/Button";


function App() {
  return (
    <div className="App">
      <Header />
      <ToggleThemeButton />
      <div className="content">
      <Main />
        <About />
        <Services />
        <Portfolio />
        <Button text={"asdasdasd"} />
      </div>
        
      <Footer />
    </div>
  );
}

export default App;
