import styled from '@emotion/styled';

const PageContainer = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2a3038"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const BoxContainer = styled.section`
  width: 100%;
  padding: 16px 12px;
  background-color: rgb(243, 244, 245);
`;

const BtnContainer = styled.section`
  width: 100%;
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  border-radius: 18px;
`;

const IconContainer = styled.section`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 16px;
  background-color: rgb(254, 229, 0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontContainer = styled.span`
  font-weight: 600;
  margin-left: 5px;
`;

const GiftsPage = () => {
  return (
    <>
      <PageContainer>
        <BoxContainer>
          <BtnContainer>
            <IconContainer>
              <PlusIcon />
            </IconContainer>
            <FontContainer>선물할 친구를 선택해 주세요.</FontContainer>
          </BtnContainer>
        </BoxContainer>
      </PageContainer>
    </>
  );
};

export default GiftsPage;
