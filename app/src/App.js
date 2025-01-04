import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import QuestionList from "./components/QuestionList";
import CreateQuestion from "./components/CreateQuestion";
import UpdateQuestion from "./components/UpdateQuestion";
import Demo from "./components/demo";
function App() {
  return (
    
    <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-us" element={<About name1 = "Ghazi" name2 = "Hassan" name3 = "Aalyan" />} />
        <Route path="/question" Component={QuestionList} />
        <Route path="/create" element={<CreateQuestion />} />
        <Route path="/update/:id" element={<UpdateQuestion />} />
        {/* <Route path="/ghazi" element={<Demo/>}/> */}
      </Routes>
    </Router>
  );
}
export default App;