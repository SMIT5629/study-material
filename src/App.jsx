import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubjectList from "./components/SubjectList";
import SubjectPage from "./components/SubjectPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sem/:semId" element={<SubjectList />} />
        <Route path="/sem/:semId/subject/:subjectId" element={<SubjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
