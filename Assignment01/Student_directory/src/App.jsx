import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import Alert from "./Components/Alert";
import StudentCard from "./Components/StudentCard";
import Footer from "./Components/Footer";
import StudentProfile from "./Pages/StudentProfile";
import Courses from "./Pages/Courses";
import DeleteUser from "./Pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BreadCrumb />

      <Routes>
        <Route path="/Courses" element={<Courses />} />
        <Route
          path="/"
          element={
            <>
             
              <div className="d-flex flex-row gap-3 px-3 mb-5">
                <StudentCard name="Abbas" id={101} major="Software Engineering" year={2} gpa={3.8} />
                <StudentCard name="Ali" id={102} major="Software Engineering" year={2} gpa={3.8} />
                <StudentCard name="Sajjad" id={103} major="Software Engineering" year={2} gpa={3.8} />
                <StudentCard name="Hussain" id={104} major="Software Engineering" year={2} gpa={3.8} />
              </div>
            </>
          }
        />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path ="/DeleteUser" element ={<DeleteUser/>}/>
       
        
      </Routes>
        <Alert />
      <Footer />
    </BrowserRouter>
  )
}

export default App