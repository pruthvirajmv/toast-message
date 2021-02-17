import "./styles.css";
import React, { useState } from "react";

function Toast({ type, color }) {
  const [showToast, setShowToast] = useState(true);

  let state = showToast ? "none" : "";

  return (
    <>
      <button onClick={() => setShowToast((showToast) => !showToast)}>
        {type}
      </button>
      <div
        style={{
          display: state,
          border: "1px solid",
          borderRadius: "8px",
          width: "200px",
          paddingTop: "12px",
          position: "absolute",
          backgroundColor: color,
          top: "0",
          right: "35%"
        }}
      >
        <button
          style={{ position: "absolute", top: "2px", right: "2px" }}
          onClick={() => setShowToast((showToast) => !showToast)}
        >
          {" "}
          X
        </button>
        <p> {type} Toast is here </p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Toast type="Error" color="rgba(239, 68, 68)" />{" "}
      <Toast type="Success" color="rgba(52, 211, 153)" />{" "}
      <Toast type="Warning" color="rgba(252, 211, 77)" />
    </div>
  );
}
