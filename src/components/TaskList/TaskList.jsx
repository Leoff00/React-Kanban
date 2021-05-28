import "./TaskList.scss";
import PropTypes from "prop-types";
import TaskItem from "../taskItem/taskItem";
import plus from "../../assets/img/plus.svg";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("New Task", taskState);
  };

  return (
    <div className="taskListContainer">
      <div className="taskListTitle">{title}</div>

      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
              // rendering the task
            />
          );
        })}
        <button className="addTasks" onClick={addTask}>
          <img className="plusImage" src={plus} alt="Plus" /> Add new task
        </button>
      </div>
    </div>
  );
}

//Typing the props

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
