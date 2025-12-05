import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubjectList from "./components/SubjectList";
import SubjectPage from "./components/SubjectPage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sem/:semId" element={<SubjectList />} />
        <Route path="/sem/:semId/subject/:subjectId" element={<SubjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
