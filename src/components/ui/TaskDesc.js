import CheckBox from "../form/CheckBox";
import {
  TaskDescription,
  Description,
  DeleteImg,
  Combine,
} from "../styled/Styled";
import DeleteIcon from "../../images/trashBin.png";

export default function TaskDesc(props) {
  const { toDo, handleDeleteToDo, handleCompleteToDo } = props;
  return (
    <>
      {toDo.map((item, index) => (
        <TaskDescription key={index}>
          <Combine>
            <CheckBox
              checked={item.checked}
              onChangeFunc={() => handleCompleteToDo(index)}
            />
            <Description checked={item.checked}>{item.desc}</Description>
          </Combine>
          <button onClick={() => handleDeleteToDo(index)}>
            <DeleteImg src={DeleteIcon} alt="delete" />
          </button>
        </TaskDescription>
      ))}
    </>
  );
}
