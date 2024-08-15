import React, { useState } from "react";
import Card from "./Card"; 


const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (input1.trim().length < 3 || input1.trim() !== input1) {
      setError("Por favor chequea que la información sea correcta");
      setSubmittedData(null);
      return;
    }
    if (input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmittedData(null);
      return;
    }
    
    setSubmittedData({ input1, input2 });
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Pelicula Favorita: </label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input2">Actor Favorito: </label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedData && <Card input1={submittedData.input1} input2={submittedData.input2} />}
    </div>
  );
};

export default Form;
