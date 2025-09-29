import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.text()) // <--- use .text() because backend returns plain string
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Message from Spring Boot:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
