import { useNavigate } from "react-router-dom";

export default function Results({
  subjects,
  students,
  handleClick,
  saveId,
  GobackComponent,
}) {
  function randomNumber() {
    return <p>: {Math.ceil(Math.random() * 5)}</p>;
  }
  const navigate = useNavigate();

  return (
    <div>
      <h2>Subjects and grades</h2>
      {students.map((data) => {
        return (
          <div
            onClick={() => {
              handleClick(navigate(data.id.value));
              saveId(
                data.name.first,
                data.name.last,
                data.email,
                data.phone,
                data.id.value
              );
            }}
          >
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
      <div>{GobackComponent}</div>
    </div>
  );
}
