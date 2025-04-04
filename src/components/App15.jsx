import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function App15() {
  const [page, setPage] = useState();
  const Navigate = useNavigate();
  const showApp = () => {
   Navigate(page);
  };
  return (
    <div>
      <h3>This is App15</h3>
      <select onChange={(e)=>setPage(e.target.value)}>
      <option value="">--Select--</option>
        <option value="/App1">App1</option>
        <option value="/App2">App2</option>
        <option value="/App3">App3</option>
      </select>
      <button onClick={showApp}>Click</button>
      <br></br>
      <Link to="/app12">Show App12</Link>
    </div>
  );
}