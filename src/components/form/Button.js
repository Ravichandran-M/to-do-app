import { Btn } from "../styled/Styled";

export default function Button(props) {
  const { onClickFunc } = props;
  return <Btn onClick={onClickFunc}>Add</Btn>;
}
