import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Blogs, Blog } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogId" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
