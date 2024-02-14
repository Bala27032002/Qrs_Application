import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUspages/AboutUs";
import Register from "./pages/Register";
import EnquiryForm from "./pages/EnquiryForm";
import Reduxcourse from "./components/Reduxcourse";
import AddminDashboard from "./components/AddminDashboard";







function App() {
  const containerStyle = {
    backgroundsize: 'cover',
    backgroundRepeat: 'no-repeat',

    backgroundColor: '#fff0fb'
  }
  return (
    <>
      <div className="App" style={containerStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/Enquiry" element={<EnquiryForm />} />
            <Route path="/adminpage" element={<AddminDashboard />} />
            <Route path="/course" element={<Reduxcourse />} />



          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
