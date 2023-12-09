import { useNavigate } from "react-router-dom";
import App2 from "../App2";
export default function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users");
  };
  return (
    <div className="App-header">
      <h1>Products</h1>
      <App2 />
      <button onClick={handleClick}>Go to Users</button>
    </div>
  );
}
