import { useState } from "react";
import Body from "./Body";

export default function BodyIndex() {
  const [task, setTask] = useState("");

  const [toDo, setToDo] = useState([]);

  const handleEnterTask = (e) => {
    //handle textbox onchange event
    setTask(e.target.value);
  };

  const handleAddToDo = () => {
    //handle Add todo - button onclick event
    if (task === "") {
      window.alert("Please enter the task!");
    } else {
      setToDo([...toDo, { checked: false, desc: task }]);
      setTask("");
    }
  };

  const handleDeleteToDo = (id) => {
    //handle delete todo - delete button onclick event
    setToDo(toDo.filter((item, index) => index !== id));
  };

  const handleCompleteToDo = (id) => {
    //handle complete todo - checkbox onchange event
    setToDo(
      toDo.map((item, index) =>
        index === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Body
      task={task}
      handleEnterTask={handleEnterTask}
      toDo={toDo}
      handleAddToDo={handleAddToDo}
      handleDeleteToDo={handleDeleteToDo}
      handleCompleteToDo={handleCompleteToDo}
    />
  );
}
