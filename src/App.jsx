import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubjectList from "./components/SubjectList";
import SubjectPage from "./components/SubjectPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sem/:semId" element={<SubjectList />} />
        <Route path="/sem/:semId/subject/:subjectId" element={<SubjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
