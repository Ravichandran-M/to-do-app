import { InputBox } from "../styled/Styled";

export default function TextBox(props) {
  const { onChangeFunc, val } = props;
  return <InputBox value={val} onChange={(e) => onChangeFunc(e)} />;
}
