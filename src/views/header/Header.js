import { HeaderComponent } from "../../components/styled/Styled";
import rocketImage from "../../images/rocketImage.png";

export default function Header(props) {
  return (
    <HeaderComponent>
      <img src={rocketImage} alt="icon"></img>todo
    </HeaderComponent>
  );
}
