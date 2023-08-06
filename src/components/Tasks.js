import React, { useMemo, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(10);
  const deleteTask = (id) => {
    //filtrar les tasques per borrar la que no vull
    let newTasks = tasks.filter((task, index) => index !== id);

    console.log(newTasks);
    //fer set state de nou
    setTasks(newTasks);
  };
  const sumCounter = () => {
    setCounter(counter + 1);
  };
  const pastCounter = (accumulated) => {
    for (let index = 0; index < accumulated; index++) {
      console.log("exec accumulated counter from past");
      console.log("se les sumó " + index + " al contador a data 01-01-1991");
    }
    return `manual counter of tasks: ${accumulated}`;
  };

  //no vull executar cada cop que rendereixi. Només s'excutarà quan s'actualitzi en counter
  const memoCounter = useMemo(() => pastCounter(counter), [counter]);

  const saveTasks = (e) => {
    e.preventDefault();

    // Tot el que hi havia a l'arrai de task i a ++ afegeixo lo que sintrodueix
    // setTasks((task) => [...task, e.target.description.value]);
    let tasksUpdated = [...tasks, e.target.description.value];
    setTasks(tasksUpdated);
    console.log(tasks);
  };

  return (
    <div className="tasks-container">
      <form onSubmit={saveTasks}>
        <input
          type="text"
          name="description"
          placeholder="tell me you task, motherfucker!"
        ></input>
        <input type="submit" value="save" />
      </form>
      {/* <h3>Manual counter of tasks: {counter}</h3> */}
      {/* <h3>{pastCounter(counter)}</h3> */}
      <h3>{memoCounter}</h3>
      <button onClick={sumCounter}>SUM</button>
      <hr />
      <h2>List of tasks:</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}&nbsp;
              <button onClick={() => deleteTask(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tasks;
