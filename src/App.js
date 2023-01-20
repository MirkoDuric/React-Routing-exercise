import "./App.css";
import useStudents from "./services/useStudents";
import Instructions from "./Instructions";
import Students from "./Students";
import Student from "./Student";
import Results from "./Results";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];
  const [studentId, setStudentId] = useState([]);
  function handleClick(id) {}
  return (
    <div className="App">
      <nav>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "white" : null })}
          className="link"
          to="/students"
        >
          Students
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "white" : null })}
          className="link"
          to="/results"
        >
          Student Results
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "white" : null })}
          className="link"
          to="/"
        >
          Home
        </NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <em>
            <Routes>
              <Route
                path="/students/"
                element={
                  <Students
                    students={students}
                    handleClick={handleClick}
                    saveId={(fName, lName, email, phone) =>
                      setStudentId({
                        first: fName,
                        last: lName,
                        email: email,
                        phone: phone,
                      })
                    }
                  />
                }
              />
              <Route
                path="/students/:id"
                element={<Student student={studentId} />}
              />
              <Route
                path="/results"
                element={<Results subjects={subjects} students={students} />}
              />
            </Routes>
          </em>
        </div>
        <Instructions className="block" />
      </div>
    </div>
  );
};

export default App;
