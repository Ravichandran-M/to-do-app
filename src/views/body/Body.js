import {
  Content,
  BodyComponent,
  InputSection,
  Tasks,
  TaskCountSection,
  TasksDescriptionBox,
} from "../../components/styled/Styled";
import TextBox from "../../components/form/TextBox";
import Button from "../../components/form/Button";
import Counter from "../../components/ui/Counter";
import TaskDesc from "../../components/ui/TaskDesc";

export default function Body(props) {
  const {
    task,
    handleEnterTask,
    toDo,
    handleAddToDo,
    handleDeleteToDo,
    handleCompleteToDo,
  } = props;

  return (
    <BodyComponent>
      <Content>
        <InputSection>
          <TextBox val={task} onChangeFunc={handleEnterTask} />
          <Button onClickFunc={handleAddToDo} />
        </InputSection>
        <Tasks>
          <TaskCountSection>
            <Counter
              statusName={"To Do"}
              count={toDo.filter((item) => item.checked !== true).length}
            />
            <Counter
              statusName={"Completed"}
              count={toDo.filter((item) => item.checked === true).length}
            />
          </TaskCountSection>
          <TasksDescriptionBox>
            <TaskDesc
              toDo={toDo}
              handleDeleteToDo={handleDeleteToDo}
              handleCompleteToDo={handleCompleteToDo}
            />
          </TasksDescriptionBox>
        </Tasks>
      </Content>
    </BodyComponent>
  );
}
