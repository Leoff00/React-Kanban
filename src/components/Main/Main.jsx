import TaskList from "../TaskList/TaskList";

import { useState } from "react";

import "./Main.scss";

let _id = 0;
const generateId = () => {
  _id = _id + 1;
  return _id;
};

export default function Main() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };

    setTasks((currentTask) => {
      return [...currentTask, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTasks = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="mainContent">
      <TaskList
        title="Pending"
        onAddTask={addTasks}
        taskState="Pending"
        tasks={tasks.filter((task) => task.state === "Pending")}
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTasks}
      />

      {/* Filtering tasks by state */}

      <TaskList
        title="Doing"
        onAddTask={addTasks}
        taskState="Doing"
        tasks={tasks.filter((task) => task.state === "Doing")}
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTasks}
      />

      {/* Filtering tasks by state */}

      <TaskList
        title="Done"
        onAddTask={addTasks}
        taskState="Done"
        tasks={tasks.filter((task) => task.state === "Done")}
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTasks}
      />
    </div>
  );
}
