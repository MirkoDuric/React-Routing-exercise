export default function Student({ student, newComponent, GobackComponent }) {
  return (
    <div>
      <p>First name: {student.first}</p>
      <p>Last name: {student.last}</p>
      <p>E-mail: {student.email}</p>
      <p>Phone number: {student.phone}</p>
      <div>{newComponent}</div>
      <hr />
      <div>{GobackComponent}</div>
    </div>
  );
}
