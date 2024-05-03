import { CountSection, TaskCount, TaskStatus } from "../styled/Styled";

export default function Counter(props) {
  const { statusName, count } = props;
  return (
    <CountSection>
      <TaskStatus>{statusName}</TaskStatus>
      <TaskCount>{count}</TaskCount>
    </CountSection>
  );
}
