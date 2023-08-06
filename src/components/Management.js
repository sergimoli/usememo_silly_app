import React, { useCallback, useEffect, useRef, useState } from "react";
import Employees from "./Employees";

function Management() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    //s'executa cada cop per que hi ha el set per cada onchange
    console.log("the view has been reenderized");
  });
  //a cada canvi que faig en un estat s'actualitza la pantalla (la vista del component).
  console.log("reender because component is rendered");
  const managementInput = useRef(null);
  const assignManager = (e) => {
    console.log(managementInput.current.value);
    // setName(managementInput.current.value);
    // no ho fem amb el ref per que no hem d'actualitzar un element del dom en temps real...
    setName(e.target.value);
  };

  const showMessage = useCallback(() => {
    console.log("hei there, i'm a message from management component, right?");
  }, [page]);

  return (
    <div>
      <h1>Boss name: {name}</h1>
      <input
        type="text"
        ref={managementInput}
        onChange={assignManager}
        placeholder="write your manager name"
      />
      <h2>List of employees:</h2>
      <button onClick={() => setPage(1)}>Page 1</button>{" "}
      <button onClick={() => setPage(2)}>page 2</button>
      <Employees page={page} message={showMessage} />
    </div>
  );
}

export default Management;
