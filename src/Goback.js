export default function Goback({ navigate }) {
  return <button onClick={() => navigate(-1)}>Go back</button>;
}
