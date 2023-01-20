export default function Studentgrades({ subjects }) {
  function randomNumber() {
    return <p>: {Math.ceil(Math.random() * 5)}</p>;
  }
  return (
    <div>
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
    </div>
  );
}
