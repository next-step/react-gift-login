import styled from "@emotion/styled";
import { Plus } from "lucide-react";

const FriendSectionWrapper = styled.section(props => ({
  display: "flex",
  padding: `${props.theme.spacing4} ${props.theme.spacing3}`,
  backgroundColor: props.theme.color.gray[200],
}));

const FriendSectionContainer = styled.div(props => ({
  display: "flex",
  alignItems: "center",
  gap: `${props.theme.spacing3}`,
  width: "100%",
  height: "74px",
  padding: `${props.theme.spacing4}`,
  backgroundColor: "white",
  borderRadius: "18px",
}));

const IconCircle = styled.div(props => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  backgroundColor: `${props.theme.color.yellow[600]}`,
  cursor: "pointer",
  borderRadius: "16px",
}));

const SectionDescription = styled.p(props => ({
  fontSize: `${props.theme.typography.body1Bold.fontSize}px`,
  lineHeight: `${props.theme.typography.body1Bold.lineHeight}`,
  fontWeight: `${props.theme.typography.body1Bold.fontWeight}`,
  color: props.theme.color.gray[900],
}));

const SelectFriendSection = () => {
  return (
    <FriendSectionWrapper>
      <FriendSectionContainer>
        <IconCircle>
          <Plus />
        </IconCircle>
        <SectionDescription>선물할 친구를 선택해 주세요.</SectionDescription>
      </FriendSectionContainer>
    </FriendSectionWrapper>
  );
};

export default SelectFriendSection;
