import { Routes, Route, Router } from "react-router";
import Tech from "./pages/Tech";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prudocts/tech/" element={<Tech />} />
        <Route path="/prudocts/houses/" element={<Houses />} />
        <Route path="auth/login" element={<Login />} />
        {/* <Route path="/register" element={<Auth />} /> */}
      </Routes>
    </>
  );
}

export default App;
