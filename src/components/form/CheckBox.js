import { Check } from "../styled/Styled";

export default function CheckBox(props) {
  const { checked, onChangeFunc } = props;
  return <Check type="checkbox" checked={checked} onChange={onChangeFunc} />;
}
