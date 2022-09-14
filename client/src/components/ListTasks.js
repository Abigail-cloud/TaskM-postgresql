import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTasks";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  //delete todo function

  const deleteTask = async id => {
    try {
      const deleteTask = await fetch(`http://localhost:4000/api/v1/tasks/${id}`, {
        method: "DELETE"
      });

      setTasks(tasks.filter(task => task.task_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTask = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/tasks");
      const jsonData = await response.json();

      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  console.log(tasks);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description📖</th>
            <th>Edit✍️</th>
            <th>Delete🗑️</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {tasks.map(task => (
            <tr key={task.task_id}>
              <td>{task.description}</td>
              <td>
                <EditTodo task={task} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.task_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;