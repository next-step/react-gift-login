import React from 'react';
import styled from '@emotion/styled';

interface MoreButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = styled.button`
  width: 100%;
  padding: ${props => props.theme.spacing.spacing4};
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 8px;
  background-color: white;
  color: ${props => props.theme.semanticColors.text.default};
  font-size: ${props => props.theme.typography.body1Regular.fontSize};
  font-weight: ${props => props.theme.typography.body1Regular.fontWeight};
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: ${props => props.theme.spacing.spacing2};
  
  &:hover {
    background-color: ${props => props.theme.colors.gray100};
    border-color: ${props => props.theme.colors.gray400};
  }
  
  &:active {
    background-color: ${props => props.theme.colors.gray200};
    transform: scale(0.99);
  }
`;

const MoreButton = ({ onClick, children }: MoreButtonProps) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default MoreButton; 