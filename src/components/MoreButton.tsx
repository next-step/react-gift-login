import styled from '@emotion/styled';

interface MoreButtonType {
  isViewMore: boolean;
  setIsViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
`;

const Button = styled.button`
  ${({ theme }) => theme.typography.label2Regular};
  width: 65%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 5px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const MoreButton = ({ isViewMore, setIsViewMore }: MoreButtonType) => {
  return (
    <Container>
      {isViewMore ? (
        <Button
          onClick={() => {
            setIsViewMore(!isViewMore);
          }}
        >
          접기
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsViewMore(!isViewMore);
          }}
        >
          더 보기
        </Button>
      )}
    </Container>
  );
};
