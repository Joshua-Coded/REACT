import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
