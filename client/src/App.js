import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import About from "./pages/About"
import Select from "./pages/Select"
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './socket/action.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path ='/select' element={<Select />} />
      </Routes>
    </>
  );
}

export default App;
