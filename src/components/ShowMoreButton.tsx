import styled from '@emotion/styled';

const Button = styled.button`
  width: 100%;
  margin: 32px 0 0 0;
  padding: 16px 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
`;

interface ShowMoreButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function ShowMoreButton({ children, onClick }: ShowMoreButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default ShowMoreButton;