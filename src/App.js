import "./App.css";
import useStudents from "./services/useStudents";
import Instructions from "./Instructions";
import Students from "./Students";
import Student from "./Student";
import Results from "./Results";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Seeresults from "./Seeresults";
import Studentgrades from "./Studentgrades";
import Goback from "./Goback";
import { useNavigate } from "react-router-dom";

const App = () => {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];
  const [studentId, setStudentId] = useState([]);
  const navigate = useNavigate();
  function handleClick(id) {
    return;
  }
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
                    GobackComponent={<Goback navigate={navigate} />}
                    saveId={(fName, lName, email, phone, id) =>
                      setStudentId({
                        first: fName,
                        last: lName,
                        email: email,
                        phone: phone,
                        id: id,
                      })
                    }
                  />
                }
              />
              <Route
                path="/students/:id"
                element={
                  <Student
                    student={studentId}
                    GobackComponent={<Goback navigate={navigate} />}
                    newComponent={
                      <Seeresults
                        studentId={studentId.id}
                        handleClick={handleClick}
                      />
                    }
                  />
                }
              />
              <Route
                path="/results"
                element={
                  <Results
                    subjects={subjects}
                    students={students}
                    handleClick={handleClick}
                    saveId={(fName, lName, email, phone, id) =>
                      setStudentId({
                        first: fName,
                        last: lName,
                        email: email,
                        phone: phone,
                        id: id,
                      })
                    }
                    GobackComponent={<Goback navigate={navigate} />}
                  />
                }
              />
              <Route
                path="/results/:id"
                element={
                  <Student
                    student={studentId}
                    newComponent={<Studentgrades subjects={subjects} />}
                    GobackComponent={<Goback navigate={navigate} />}
                  />
                }
              />
            </Routes>
          </em>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
