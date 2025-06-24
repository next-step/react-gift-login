import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #545b62;
  }

  &:active {
    background-color: #3d4449;
  }
`; 