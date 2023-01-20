import { useNavigate } from "react-router-dom";
export default function Students({
  students,
  handleClick,
  saveId,
  GobackComponent,
}) {
  const navigate = useNavigate();
  return (
    <div>
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
            <hr />
          </div>
        );
      })}
      <div>{GobackComponent}</div>
    </div>
  );
}
