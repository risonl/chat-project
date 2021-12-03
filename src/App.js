import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import About from "./pages/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
