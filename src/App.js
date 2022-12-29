import "./App.css";
import DarkMode from "./components/DarkMode";
import Features from "./components/Features";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <main className="container">
      <DarkMode/>
      {/* Header */}
      <Header />

      <aside>
        {/* Progress bar */}
        <ProgressBar/>

         {/* Features */}
        <Features />
      </aside>
    </main>
  );
}

export default App;
