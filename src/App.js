import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/*" element={<MainComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
