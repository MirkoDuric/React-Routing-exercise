import Students from "./Students";
export default function Results({ subjects, students }) {
  function randomNumber() {
    return <p>: {Math.ceil(Math.random() * 5)}</p>;
  }
  const mySubjects = () => {};

  return (
    <div>
      <h2>Subjects and grades</h2>
      {students.map((data) => {
        return (
          <div>
            <p>First name: {data.name.first}</p>
            <p>Last name: {data.name.last}</p>
            <p>
              {subjects.map((data) => {
                return (
                  <div>
                    <li className="grades">
                      {data} {randomNumber()}
                    </li>
                  </div>
                );
              })}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
