import "./taskItem.scss";
import PropTypes from "prop-types";
import trash from "../../assets/img/delete.svg";

import { useState } from "react";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  //listening the input in change
  const onTitleChange = (e) => {
    const newTitle = e.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  //when press enter will "save" the task
  const onkeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);

      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    } else {
      return;
    }
  };

  //change the target of select
  const onTaskStateChange = (e) => {
    onTaskUpdate(id, title, e.target.value);
  };

  if (isEditing) {
    return (
      <input
        className="taskItemInput"
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onkeyPress}
      ></input>
    );
  } else {
    return (
      <div className="taskItemContainer">
        <div className="textInput" onClick={(e) => setIsEditing(true)}>
          {editableTitle}
        </div>

        <div className="selectAndButtonContainer">
          <select
            onChange={onTaskStateChange}
            value={taskState}
            className="selectInput"
          >
            <option value="Pending">Pending</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

          <button onClick={() => onDeleteTask(id)} className="deleteButton">
            <img src={trash} className="trashImg" alt="Delete" /> Delete Tasks
          </button>
        </div>
      </div>
    );
  }
}

//Typing the props

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
