import { FiChevronLeft } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import {
  NavBar,
  IconButton,
  Title,
} from "@/components/NavigationBar/NavigationBar.style";

export default function NavigationBar() {
  return (
    <NavBar>
      <IconButton>
        <FiChevronLeft size={30} />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton>
        <GoPerson size={30} />
      </IconButton>
    </NavBar>
  );
}
