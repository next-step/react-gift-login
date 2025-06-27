import styled from "@emotion/styled";

const BehaviorCategoryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.state.infoBackground};
  color: ${({ theme }) => theme.colors.blue.blue400};
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
`;
const BehaviorTextButton = styled.button`
  width: 100%;

  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.state.info};
  display: flex;
  justify-content: center;
  transition:
    color 200ms,
    font-weight 200ms;
`;

const BehaviorCategory = () => {
  return (
     <BehaviorCategoryWrapper>
        <BehaviorTextButton>받고 싶어한</BehaviorTextButton>
        <BehaviorTextButton>많이 선물한</BehaviorTextButton>
        <BehaviorTextButton>위시로 받은</BehaviorTextButton>
      </BehaviorCategoryWrapper>
  )
}

export default BehaviorCategory
 